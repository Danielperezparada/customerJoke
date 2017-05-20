import pagUtilsTest from './utilsTest/pagUtilsTest';
import utilities from './utilsTest/utilitiesTest';

describe('Unit Tests For Customers Utils', () => {
  // Test
  pagUtilsTest.getCustomerPathParamsFullFilledAscTest();
  pagUtilsTest.getCustomerPathParamsFullFilledDescTest();
  pagUtilsTest.getCustomerPathParamsFullFilledUnexpectedTest();
  pagUtilsTest.getActualParamTest();
  pagUtilsTest.getFirstParamTest();
  pagUtilsTest.getNextParamTest();
  pagUtilsTest.getPrevParamTest();
  pagUtilsTest.getLastParamPositiveNumberTest();
  pagUtilsTest.getLastParamNegativeNumberTest();

  utilities.getOrderAndPagAscTest();
  utilities.getOrderAndPagDescTest();
  utilities.getOrderAndPagUnexpectedTest();
  utilities.createCustomErrorTest();
  utilities.getAgerTest();
  // End Test
});
