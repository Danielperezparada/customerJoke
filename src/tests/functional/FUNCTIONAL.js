
const customerPosts = require('./apiTest/posts');
const customerGets = require('./apiTest/gets');
const customerPuts = require('./apiTest/puts');
const customerDeletes = require('./apiTest/deletes');

describe('Smoke Tests For Customers Api', () => {
  // Test
  customerPosts.postCustomerOneTest();
  customerPosts.postCustomerGeneralValidationErrorTest();
  customerPosts.postCustomerValidationDateErrorTest();
  customerPosts.postCustomerFourTest();
  customerPosts.postCustomerFiveTest();

  customerGets.getAllCustomersTest();
  customerGets.getAllCustomersPaginatedFirstPartAscTest();
  customerGets.getAllCustomersPaginatedSecondPartAscTest();
  customerGets.getAllCustomersPaginatedThirdPartAscTest();
  customerGets.getAllCustomersPaginatedFirstPartDescTest();
  customerGets.getAllCustomersPaginatedSecondPartDescTest();
  customerGets.getAllCustomersPaginatedThirdPartDescTest();
  customerGets.getCustomerByIdTest();
  customerGets.getCustomerByFakeIdTest();

  customerPuts.putCustomerOneByIdTest();
  customerPuts.putCustomerByFakeIdTest();
  customerPuts.putCustomerBadRequestTest();

  customerDeletes.deleteCustomerOneByIdTest();
  customerDeletes.deleteCustomerByFakeIdTest();
  customerDeletes.deleteCustomerFourByIdTest();
  customerDeletes.deleteCustomerFiveByIdTest();
  // End Test
});
