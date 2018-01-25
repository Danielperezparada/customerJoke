
const supertest = require('supertest');
const expect = require('expect');

const customerTest1 = require('../samples/customer1.json');
const customerUpdatedTest1 = require('../samples/customerUpdated1.json');
const customerUpdatedTest2 = require('../samples/customerUpdated2.json');

const app = require('../../../server/server');

const server = supertest.agent(app);

exports.patchCustomerOneByIdTest = () => {
  it('PUT Customer One by Id - Positive.', (done) => {
    server.patch(`/api/customers/${customerTest1.id}`)
      .set('Content-Type', 'application/json')
      .send(customerUpdatedTest1)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.id).toBe(customerUpdatedTest1.id);
        expect(res.body.first_name).toBe(customerUpdatedTest1.first_name);
        expect(res.body.last_name).toBe(customerUpdatedTest1.last_name);
        expect(res.body.birth_date).toBe(customerUpdatedTest1.birth_date);

        done();
      });
  });
};

exports.patchCustomerByFakeIdTest = () => {
  it('PUT Customer by Fake Id - Negative.', (done) => {
    server.patch(`/api/customers/FakeId`)
      .set('Content-Type', 'application/json')
      .send(customerUpdatedTest1)
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(res.body.error).toBeDefined();

        done();
      });
  });
};

exports.patchCustomerBadRequestTest = () => {
  it('PUT Customer Bad Request - Negative.', (done) => {
    server.patch(`/api/customers/${customerTest1.id}`)
      .set('Content-Type', 'application/json')
      .send(customerUpdatedTest2)
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBeDefined();

        done();
      });
  });
};
