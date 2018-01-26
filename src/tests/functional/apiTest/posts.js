
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
        expect(res.body.firstName).toBe(customerTest1.firstName);
        expect(res.body.lastName).toBe(customerTest1.lastName);
        expect(res.body.birthDate).toBe(customerTest1.birthDate);

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
        expect(res.body.firstName).toBe(customerTest4.firstName);
        expect(res.body.lastName).toBe(customerTest4.lastName);
        expect(res.body.birthDate).toBe(customerTest4.birthDate);

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
        expect(res.body.firstName).toBe(customerTest5.firstName);
        expect(res.body.lastName).toBe(customerTest5.lastName);
        expect(res.body.birthDate).toBe(customerTest5.birthDate);

        done();
      });
  });
};
