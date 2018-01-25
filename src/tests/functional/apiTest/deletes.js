
const supertest = require('supertest');
const expect = require('expect');

const customerTest1 = require('../samples/customer1.json');
const customerTest4 = require('../samples/customer4.json');
const customerTest5 = require('../samples/customer5.json');

const app = require('../../../server/server');

const server = supertest.agent(app);

exports.deleteCustomerOneByIdTest = () => {
  it('DELETE Customer One by Id - Positive.', (done) => {
    server.delete(`/api/customers/${customerTest1.id}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.count).toBe(1);

        done();
      });
  });
};

exports.deleteCustomerByFakeIdTest = () => {
  it('DELETE Customer by Fake Id - Negative.', (done) => {
    server.delete('/api/customers/fakeId')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.count).toBe(0);

        done();
      });
  });
};

exports.deleteCustomerFourByIdTest = () => {
  it('DELETE Customer Four by Id - Positive.', (done) => {
    server.delete(`/api/customers/${customerTest4.id}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.count).toBe(1);

        done();
      });
  });
};

exports.deleteCustomerFiveByIdTest = () => {
  it('DELETE Customer Five by Id - Positive.', (done) => {
    server.delete(`/api/customers/${customerTest5.id}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.count).toBe(1);

        done();
      });
  });
};
