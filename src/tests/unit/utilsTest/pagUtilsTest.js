
import { getCustomerPathParams, getActualParam, getFirstParam, getNextParam, getPrevParam, getLastParam } from '../../../common/util/pagUtils';
import expect from 'expect';

exports.getCustomerPathParamsFullFilledAscTest = () => {
  it('Get Customer Path Param full filled asc - Positive', (done) => {
      const query = {
        first_name: 'asc',
        last_name: 'asc',
        birth_date: 'asc'
      };
      const result = getCustomerPathParams(query);
      expect(result).toEqual('?first_name=asc&last_name=asc&birth_date=asc&');

      done();
  });
};

exports.getCustomerPathParamsFullFilledDescTest = () => {
  it('Get Customer Path Param full filled desc - Positive', (done) => {
      const query = {
        first_name: 'desc',
        last_name: 'desc',
        birth_date: 'desc'
      };
      const result = getCustomerPathParams(query);
      expect(result).toEqual('?first_name=desc&last_name=desc&birth_date=desc&');

      done();
  });
};

exports.getCustomerPathParamsFullFilledUnexpectedTest = () => {
  it('Get Customer Path Param full filled Unexpected - Positive', (done) => {
      const query = {
        first_name: 'aaa',
        last_name: 'bbb',
        birth_date: 'ccc'
      };
      const result = getCustomerPathParams(query);
      expect(result).toEqual('?');

      done();
  });
};

exports.getActualParamTest = () => {
  it('Get Href Param - Positive', (done) => {
      const limit = 10;
      const offset = 0;
      const result = getActualParam(limit, offset);
      expect(result).toEqual('offset=0&limit=10');

      done();
  });
};

exports.getFirstParamTest = () => {
  it('Get First Href Param - Positive', (done) => {
      const limit = 10;
      const result = getFirstParam(limit);
      expect(result).toEqual('offset=0&limit=10');

      done();
  });
};

exports.getNextParamTest = () => {
  it('Get Next Href Param - Positive', (done) => {
      const limit = 2;
      const offset = 0;
      const result = getNextParam(limit, (offset+limit));
      expect(result).toEqual('offset=2&limit=2');

      done();
  });
};

exports.getPrevParamTest = () => {
  it('Get Prev Href Param - Positive', (done) => {
      const limit = 2;
      const offset = 2;
      const result = getPrevParam(limit, offset);
      expect(result).toEqual('offset=0&limit=2');

      done();
  });
};

exports.getLastParamPositiveNumberTest = () => {
  it('Get Last Href Param positive number - Positive', (done) => {
      const limit = 2;
      const total = 4;
      const result = getLastParam(limit, total);
      expect(result).toEqual('offset=2&limit=2');

      done();
  });
};

exports.getLastParamNegativeNumberTest = () => {
  it('Get Last Href Param negative number - Positive', (done) => {
      const limit = 4;
      const total = 2;
      const result = getLastParam(limit, total);
      expect(result).toEqual('offset=0&limit=4');

      done();
  });
};
