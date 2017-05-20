
import { getOrderAndPag, createCustomError, getAge } from '../../../common/util/utilities';
import expect from 'expect';

exports.getOrderAndPagAscTest = () => {
  it('Get Customer Order and Pag asc - Positive', (done) => {
      const first_name = 'asc';
      const last_name = 'asc';
      const birth_date = 'asc';
      const offset = 0;
      const limit = 10;

      const result = getOrderAndPag(first_name, last_name, birth_date, offset, limit);

      const expectedResult = {
        skip:offset,
        limit:limit,
        order: [
          'first_name asc',
          'last_name asc',
          'birth_date asc'
        ]
      };

      expect(result).toEqual(expectedResult);

      done();
  });
};

exports.getOrderAndPagDescTest = () => {
  it('Get Customer Order and Pag desc - Positive', (done) => {
      const first_name = 'desc';
      const last_name = 'desc';
      const birth_date = 'desc';
      const offset = 0;
      const limit = 10;

      const result = getOrderAndPag(first_name, last_name, birth_date, offset, limit);

      const expectedResult = {
        skip:offset,
        limit:limit,
        order: [
          'first_name desc',
          'last_name desc',
          'birth_date desc'
        ]
      };

      expect(result).toEqual(expectedResult);

      done();
  });
};

exports.getOrderAndPagUnexpectedTest = () => {
  it('Get Customer Order and Pag Unexpected - Positive', (done) => {
      const first_name = 'aaa';
      const last_name = 'bbb';
      const birth_date = 'ccc';
      const offset = 0;
      const limit = 10;

      const result = getOrderAndPag(first_name, last_name, birth_date, offset, limit);

      const expectedResult = {
        skip:offset,
        limit:limit,
        order: []
      };

      expect(result).toEqual(expectedResult);

      done();
  });
};

exports.createCustomErrorTest = () => {
  it('Create custom error test - Positive', (done) => {
      const statusCode = '404';
      const name = 'Not Found';
      const msg = 'could not find a model with id aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';

      const result = createCustomError(statusCode, name, msg);

      const expectedResult = {
        message: msg,
        statusCode:statusCode,
        name: name
      };

      expect(result).toEqual(expectedResult);

      done();
  });
};

exports.getAgerTest = () => {
  it('Get Age from date test - Positive', (done) => {
      const birth_date = '1989-10-02';
      const result = getAge(birth_date);

      expect(result).toEqual(27);

      done();
  });
};
