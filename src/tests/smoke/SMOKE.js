
import customerPosts from './apiTest/posts';
import customerGets from './apiTest/gets';
import customerPuts from './apiTest/puts';
import customerDeletes from './apiTest/deletes';

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
