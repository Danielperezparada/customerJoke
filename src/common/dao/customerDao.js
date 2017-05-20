
// Data access objec script where it is defined the operations that the customerModel can do
//  - insertOneCustomer: insert a customer
//  - updateOneCustomer: update a customer
//  - getManyCustomers: retrieve a list of customers with the abiliy to sort or paginate
//  - getOneCustomer: retrieve the customer show the age instead the birth_date and a random joke
//  - deleteOneCustomer: delete a customer

import { getAge, createCustomError } from '../util/utilities';
import { getCustomerPathParams, getActualParam, getFirstParam, getNextParam, getPrevParam, getLastParam } from '../util/pagUtils';
import nodeRestClient from 'node-rest-client';

const Client = nodeRestClient.Client;

// Retrieve a list of customers from the Db with the ability to use path parameters to sort and paginate
// Sort params: first_name, last_name, birth_date
// Sort values: asc, desc (it works ignoring the sensitive case)
// Pagination params: limit, offset
// Pagination values: integers
function getManyCustomers(customerModel, req, searchQuery, cb) {

  const limit = searchQuery.limit;
  const offset = searchQuery.skip;

  customerModel.count({}, (err, total) => {
    const href = `${req.baseUrl}${getCustomerPathParams(req.query)}${getActualParam(limit, offset)}`;
    const first = { href: `${req.baseUrl}${getCustomerPathParams(req.query)}${getFirstParam(limit)}` };
    const last = { href: `${req.baseUrl}${getCustomerPathParams(req.query)}${getLastParam(limit, total)}` };
    let next;
    let prev;

    const offPlusLim = parseInt(offset) + parseInt(limit);
    if (offPlusLim < total) {
      next = { href: `${req.baseUrl}${getCustomerPathParams(req.query)}${getNextParam(limit, offPlusLim)}` };
    }
    if ((offset > 0) && (offset < total)) {
      prev = { href: `${req.baseUrl}${getCustomerPathParams(req.query)}${getPrevParam(limit, offset)}` };
    }

    // Get many customers from the database with the given searchQuery
    customerModel.find(searchQuery, (err, customers) => {
      // If success show the response
      cb(err, customers, offset, limit, href, first, next, prev, last);
    });
  });
}

// Retrieve a single customer from the Db replacing the birth_date for the current age
// also it add a random joke from the http://api.icndb.com/jokes/random
function getOneCustomer(customerModel, searchQuery, cb) {

  // Get one custmer from the database with the given searchQuery
  customerModel.findOne(searchQuery, (err, customer) => {
    if(!err && !customer){
      // If customer does not exist we throw a 404 error
      const customErr = createCustomError(404, 'Not Found', `could not find a model with id ${searchQuery.where.id}`);
      cb(customErr);
    }else{
      // If success we request the random joke from the given url passing first_name and last_name as search params
      const client = new Client();
      client.get(`http://api.icndb.com/jokes/random?firstName=${customer.first_name}&lastName=${customer.last_name}`,(elem, response) => {

        // Build the response whith the age and the generated joke
        const res = {
            id: customer.id,
            first_name: customer.first_name,
            last_name: customer.last_name,
            age: getAge(customer.birth_date),
            joke: elem.value.joke
        };

        cb(err, res);
      });
    }
  });
}

export {
  getManyCustomers,
  getOneCustomer,
};
