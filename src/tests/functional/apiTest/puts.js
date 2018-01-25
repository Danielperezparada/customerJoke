
const supertest = require('supertest');
const expect = require('expect');

const customerTest1 = require('../samples/customer1.json');
const customerUpdatedTest1 = require('../samples/customerUpdated1.json');
const customerUpdatedTest2 = require('../samples/customerUpdated2.json');

const app = require('../../../server/server');

const server = supertest.agent(app);

exports.putCustomerOneByIdTest = () => {
  it('PUT Customer One by Id - Positive.', (done) => {
    server.put(`/api/customers/${customerTest1.id}`)
      .set('Content-Type', 'application/json')
      .send(customerUpdatedTest1)
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.id).toEqual(customerUpdatedTest1.id);
        expect(res.body.first_name).toEqual(customerUpdatedTest1.first_name);
        expect(res.body.last_name).toEqual(customerUpdatedTest1.last_name);
        expect(res.body.birth_date).toEqual(customerUpdatedTest1.birth_date);

        done();
      });
  });
};

exports.putCustomerByFakeIdTest = () => {
  it('PUT Customer by Fake Id - Negative.', (done) => {
    server.put(`/api/customers/FakeId`)
      .set('Content-Type', 'application/json')
      .send(customerUpdatedTest1)
      .end((err, res) => {
        expect(res.status).toEqual(404);
        expect(res.body.error).toExist();

        done();
      });
  });
};

exports.putCustomerBadRequestTest = () => {
  it('PUT Customer Bad Request - Negative.', (done) => {
    server.put(`/api/customers/${customerTest1.id}`)
      .set('Content-Type', 'application/json')
      .send(customerUpdatedTest2)
      .end((err, res) => {
        expect(res.status).toEqual(400);
        expect(res.body.error).toExist();

        done();
      });
  });
};
