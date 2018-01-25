
const supertest = require('supertest');
const expect = require('expect');

const customerTest1 = require('../samples/customer1.json');
const customerTest2 = require('../samples/customer2.json');
const customerTest3 = require('../samples/customer3.json');
const customerTest4 = require('../samples/customer4.json');
const customerTest5 = require('../samples/customer5.json');

const app = require('../../../server/server');

const server = supertest.agent(app);

exports.postCustomerOneTest = () => {
  it('POST Customer One - Positive.', (done) => {
    server.post(`/api/customers`)
      .set('Content-Type', 'application/json')
      .send(customerTest1)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.id).toBe(customerTest1.id);
        expect(res.body.first_name).toBe(customerTest1.first_name);
        expect(res.body.last_name).toBe(customerTest1.last_name);
        expect(res.body.birth_date).toBe(customerTest1.birth_date);

        done();
      });
  });
};

exports.postCustomerGeneralValidationErrorTest = () => {
  it('POST Customer Validation Error - Negative.', (done) => {
    server.post(`/api/customers`)
      .set('Content-Type', 'application/json')
      .send(customerTest2)
      .end((err, res) => {
        expect(res.status).toBe(422);
        expect(res.body.error).toBeDefined();

        done();
      });
  });
};

exports.postCustomerValidationDateErrorTest = () => {
  it('POST Customer Date Validation Error - Negative.', (done) => {
    server.post(`/api/customers`)
      .set('Content-Type', 'application/json')
      .send(customerTest3)
      .end((err, res) => {
        expect(res.status).toBe(422);
        expect(res.body.error).toBeDefined();

        done();
      });
  });
};

exports.postCustomerFourTest = () => {
  it('POST Customer Four - Positive.', (done) => {
    server.post(`/api/customers`)
      .set('Content-Type', 'application/json')
      .send(customerTest4)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.id).toBe(customerTest4.id);
        expect(res.body.first_name).toBe(customerTest4.first_name);
        expect(res.body.last_name).toBe(customerTest4.last_name);
        expect(res.body.birth_date).toBe(customerTest4.birth_date);

        done();
      });
  });
};

exports.postCustomerFiveTest = () => {
  it('POST Customer Five - Positive.', (done) => {
    server.post(`/api/customers`)
      .set('Content-Type', 'application/json')
      .send(customerTest5)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.id).toBe(customerTest5.id);
        expect(res.body.first_name).toBe(customerTest5.first_name);
        expect(res.body.last_name).toBe(customerTest5.last_name);
        expect(res.body.birth_date).toBe(customerTest5.birth_date);

        done();
      });
  });
};
