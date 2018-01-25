
const { disableAllMethods } = require('../util/helper');
const { getAllCustomers } = require('../functions/getAllCustomers');
const { getCustomerById } = require('../functions/getCustomerById');
const { countCustomers } = require('../functions/countCustomers');

const FIND_ALL_CUSTOMERS = {
  http: { verb: 'get', path: '/' },
  accepts: [
    { arg: 'req', type: 'Object', http: { source: 'req' } },
    { arg: 'firstName', type: 'String' },
    { arg: 'lastName', type: 'String' },
    { arg: 'birthDate', type: 'String' },
    { arg: 'offset', type: 'String' },
    { arg: 'limit', type: 'String' },
  ],
  returns: [
    { arg: 'items', type: 'customer' },
    { arg: 'offset', type: 'number', http: { target: 'body' } },
    { arg: 'limit', type: 'number', http: { target: 'body' } },
    { arg: 'href', type: 'String', http: { target: 'body' } },
    { arg: 'first', type: 'Object', http: { target: 'body' } },
    { arg: 'next', type: 'Object', http: { target: 'body' } },
    { arg: 'prev', type: 'Object', http: { target: 'body' } },
    { arg: 'last', type: 'Object', http: { target: 'body' } },
  ],
};

const FIND_CUSTOMER_BY_ID = {
  http: { verb: 'get', path: '/:id' },
  accepts: { arg: 'id', type: 'String' },
  returns: { arg: 'items', type: 'customer', root: true },
};

module.exports = (Customer) => {
  // Disable all default methods
  disableAllMethods(Customer, ['create', 'updateAttributes', 'deleteById']);

  // Loopback validation
  Customer.validatesUniquenessOf('id', { message: 'is not unique' });
  Customer.validatesFormatOf('id', { with: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/, message: 'Id has to be a uuid' });
  Customer.validatesLengthOf('id', { is: 36, message: { is: 'id has to be in uuid format' } });
  Customer.validatesFormatOf('firstName', { with: /\w+/, message: 'firstName has to be string' });
  Customer.validatesLengthOf('firstName', { max: 128, message: { max: 'firstName is too big - max 128' } });
  Customer.validatesFormatOf('lastName', { with: /\w+/, message: 'lastName has to be string' });
  Customer.validatesLengthOf('lastName', { max: 128, message: { max: 'lastName is too big - max 128' } });
  Customer.validatesFormatOf('birthDate', { with: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/, message: 'birthDate has to be in YYYY-MM-DD format' });
  Customer.validatesLengthOf('birthDate', { is: 10, message: { max: 'birthDate has to be in format YYYY-MM-DD format' } });
  function dateValidator(err) {
    const date = new Date(this.birthDate);
    if (Object.prototype.toString.call(date) === "[object Date]" && Number.isNaN(date.getTime())) err();
  }
  Customer.validate('birthDate', dateValidator, { message: 'birthDate has to be in format YYYY-MM-DD format' });

  // GET api/customers functionality
  Customer.findAllCustomers = (req, firstName, lastName, birthDate, offset, limit, cb) => {
    getAllCustomers({
      customerModel: Customer,
      offset,
      limit,
      firstName,
      lastName,
      birthDate,
      baseUrl: req.baseUrl,
      originalQuery: req.query,
      _countCustomers: countCustomers
    })
      .then((result) => {
        cb(
          null, result.items, result.offset, result.limit, result.href,
          result.first, result.next, result.prev, result.last
        );
      })
      .catch((error) => {
        cb(error);
      });
  };

  // GET api/customers/id functionality
  Customer.findCustomerById = (id, cb) => {
    getCustomerById({
      customerModel: Customer,
      icndbJoke: Customer.app.models.icndbjoke,
      searchId: id
    })
      .then((result) => {
        cb(null, result);
      })
      .catch((error) => {
        cb(error);
      });
  };

  // GET api/customers definition
  Customer.remoteMethod('findAllCustomers', FIND_ALL_CUSTOMERS);
  // GET api/customers/id definition
  Customer.remoteMethod('findCustomerById', FIND_CUSTOMER_BY_ID);
};
