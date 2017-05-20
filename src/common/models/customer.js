
import { disableAllMethods } from '../util/helper';
import { getOrderAndPag } from '../util/utilities';
import { getManyCustomers, getOneCustomer } from '../dao/customerDao';

module.exports = function(Customer) {
    // Disable all default methods
    disableAllMethods(Customer, ['create', 'updateAttributes', 'deleteById']);

    // Loopback validation
    Customer.validatesUniquenessOf('id', { message: 'is not unique' });
    Customer.validatesFormatOf('id', { with: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/, message: 'Id has to be a uuid' });
    Customer.validatesLengthOf('id', { is: 36, message: { is: 'id has to be in uuid format' } });
    Customer.validatesFormatOf('first_name', { with: /\w+/, message: 'first_name has to be string' });
    Customer.validatesLengthOf('first_name', { max: 128, message: { max: 'first_name is too big - max 128' } });
    Customer.validatesFormatOf('last_name', { with: /\w+/, message: 'last_name has to be string'});
    Customer.validatesLengthOf('last_name', { max: 128, message: { max: 'last_name is too big - max 128' } });
    Customer.validatesFormatOf('birth_date', { with: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/, message: 'birth_date has to be in YYYY-MM-DD format'});
    Customer.validatesLengthOf('birth_date', { is: 10, message: { max: 'birth_date has to be in format YYYY-MM-DD format' } });
    function dateValidator(err) {
      const date = new Date(this.birth_date);
      if ( Object.prototype.toString.call(date) === "[object Date]" && isNaN( date.getTime() ) ) err();
    }
    Customer.validate('birth_date', dateValidator, { message: 'birth_date has to be in format YYYY-MM-DD format' });

    // GET api/customers definition
    Customer.remoteMethod('findAllCustomers', {
      http: { verb: 'get', path: '/' },
      accepts: [
        { arg: 'req', type: 'Object', http: { source: 'req' } },
        { arg: 'first_name', type: 'String' },
        { arg: 'last_name', type: 'String' },
        { arg: 'birth_date', type: 'String' },
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
    });

    // GET api/customers functionality
    Customer.findAllCustomers = (req, first_name, last_name, birth_date, offset, limit, cb) => {
      if(!offset || (offset < 0)) offset = '0';
      if(!limit || (limit < 0)) limit = '10';
      const searchQuery = getOrderAndPag(first_name, last_name, birth_date, offset, limit);
      getManyCustomers(Customer, req, searchQuery, cb);
    };

    // GET api/customers/id definition
    Customer.remoteMethod('findCustomerById', {
      http: { verb: 'get', path: '/:id' },
      accepts: { arg: 'id', type: 'String' },
      returns: { arg: 'items', type: 'customer', root: true },
    });

    // GET api/customers/id functionality
    Customer.findCustomerById = (id, cb) => {
      const searchQuery = { where: { id:id } };
      getOneCustomer(Customer, searchQuery, cb);
    };

};
