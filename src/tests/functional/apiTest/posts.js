
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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.id).toEqual(customerTest1.id);
        expect(res.body.first_name).toEqual(customerTest1.first_name);
        expect(res.body.last_name).toEqual(customerTest1.last_name);
        expect(res.body.birth_date).toEqual(customerTest1.birth_date);

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
        expect(res.status).toEqual(422);
        expect(res.body.error).toExist();

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
        expect(res.status).toEqual(422);
        expect(res.body.error).toExist();

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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.id).toEqual(customerTest4.id);
        expect(res.body.first_name).toEqual(customerTest4.first_name);
        expect(res.body.last_name).toEqual(customerTest4.last_name);
        expect(res.body.birth_date).toEqual(customerTest4.birth_date);

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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.id).toEqual(customerTest5.id);
        expect(res.body.first_name).toEqual(customerTest5.first_name);
        expect(res.body.last_name).toEqual(customerTest5.last_name);
        expect(res.body.birth_date).toEqual(customerTest5.birth_date);

        done();
      });
  });
};
