
import supertest from 'supertest';
import expect from 'expect';

import customerTest1 from '../samples/customer1.json';
import customerTest4 from '../samples/customer4.json';
import customerTest5 from '../samples/customer5.json';

import app from '../../../server/server';

const server = supertest.agent(app);

exports.deleteCustomerOneByIdTest = () => {
  it('DELETE Customer One by Id - Positive.', (done) => {
    server.delete(`/api/customers/${customerTest1.id}`)
    .end((err, res) => {
      expect(res.status).toEqual(200);
      expect(res.body.error).toNotExist();
      expect(res.body.count).toEqual(1);

      done();
    });
  });
};

exports.deleteCustomerByFakeIdTest = () => {
  it('DELETE Customer by Fake Id - Negative.', (done) => {
    server.delete('/api/customers/fakeId')
    .end((err, res) => {
      expect(res.status).toEqual(200);
      expect(res.body.error).toNotExist();
      expect(res.body.count).toEqual(0);

      done();
    });
  });
};

exports.deleteCustomerFourByIdTest = () => {
  it('DELETE Customer Four by Id - Positive.', (done) => {
    server.delete(`/api/customers/${customerTest4.id}`)
    .end((err, res) => {
      expect(res.status).toEqual(200);
      expect(res.body.error).toNotExist();
      expect(res.body.count).toEqual(1);

      done();
    });
  });
};

exports.deleteCustomerFiveByIdTest = () => {
  it('DELETE Customer Five by Id - Positive.', (done) => {
    server.delete(`/api/customers/${customerTest5.id}`)
    .end((err, res) => {
      expect(res.status).toEqual(200);
      expect(res.body.error).toNotExist();
      expect(res.body.count).toEqual(1);

      done();
    });
  });
};
