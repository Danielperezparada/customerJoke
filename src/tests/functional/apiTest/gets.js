
const supertest = require('supertest');
const expect = require('expect');

const customerTest1 = require('../samples/customer1.json');
const customerTest4 = require('../samples/customer4.json');
const customerTest5 = require('../samples/customer5.json');

const app = require('../../../server/server');

const server = supertest.agent(app);

exports.getAllCustomersTest = () => {
  it('GET All Customers - Positive.', (done) => {
    server.get('/api/customers')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.items.length).toBe(3);
        expect(res.body.offset).toBeDefined();
        expect(res.body.limit).toBeDefined();
        expect(res.body.href).toBeDefined();
        expect(res.body.first).toBeDefined();
        expect(res.body.last).toBeDefined();

        res.body.items.forEach((element) => {
          expect(element.id).toBeDefined();
          expect(element.firstName).toBeDefined();
          expect(element.lastName).toBeDefined();
          expect(element.birthDate).toBeDefined();
        });

        done();
      });
  });
};

exports.getAllCustomersPaginatedFirstPartAscTest = () => {
  it('GET All Customers Paginated First Part Asc - Positive.', (done) => {
    server.get('/api/customers?firstName=asc&lastName=asc&birthDate=asc')
      .send('offset=0')
      .send('limit=1')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.items.length).toBe(1);
        expect(res.body.offset).toBeDefined();
        expect(res.body.limit).toBeDefined();
        expect(res.body.href).toBeDefined();
        expect(res.body.first).toBeDefined();
        expect(res.body.last).toBeDefined();

        res.body.items.forEach((element) => {
          expect(element.id).toBe(customerTest1.id);
          expect(element.firstName).toBe(customerTest1.firstName);
          expect(element.lastName).toBe(customerTest1.lastName);
          expect(element.birthDate).toBe(customerTest1.birthDate);
        });

        done();
      });
  });
};

exports.getAllCustomersPaginatedSecondPartAscTest = () => {
  it('GET All Customers Paginated Second Part Asc- Positive.', (done) => {
    server.get('/api/customers?firstName=asc&lastName=asc&birthDate=asc')
      .send('offset=1')
      .send('limit=1')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.items.length).toBe(1);
        expect(res.body.offset).toBeDefined();
        expect(res.body.limit).toBeDefined();
        expect(res.body.href).toBeDefined();
        expect(res.body.first).toBeDefined();
        expect(res.body.last).toBeDefined();

        res.body.items.forEach((element) => {
          expect(element.id).toBe(customerTest4.id);
          expect(element.firstName).toBe(customerTest4.firstName);
          expect(element.lastName).toBe(customerTest4.lastName);
          expect(element.birthDate).toBe(customerTest4.birthDate);
        });

        done();
      });
  });
};

exports.getAllCustomersPaginatedThirdPartAscTest = () => {
  it('GET All Customers Paginated Third Part Asc - Positive.', (done) => {
    server.get('/api/customers?firstName=asc&lastName=asc&birthDate=asc')
      .send('offset=2')
      .send('limit=1')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.items.length).toBe(1);
        expect(res.body.offset).toBeDefined();
        expect(res.body.limit).toBeDefined();
        expect(res.body.href).toBeDefined();
        expect(res.body.first).toBeDefined();
        expect(res.body.last).toBeDefined();

        res.body.items.forEach((element) => {
          expect(element.id).toBe(customerTest5.id);
          expect(element.firstName).toBe(customerTest5.firstName);
          expect(element.lastName).toBe(customerTest5.lastName);
          expect(element.birthDate).toBe(customerTest5.birthDate);
        });

        done();
      });
  });
};

exports.getAllCustomersPaginatedFirstPartDescTest = () => {
  it('GET All Customers Paginated First Part Desc- Positive.', (done) => {
    server.get('/api/customers?firstName=desc&lastName=desc&birthDate=desc')
      .send('offset=0')
      .send('limit=1')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.items.length).toBe(1);
        expect(res.body.offset).toBeDefined();
        expect(res.body.limit).toBeDefined();
        expect(res.body.href).toBeDefined();
        expect(res.body.first).toBeDefined();
        expect(res.body.last).toBeDefined();

        res.body.items.forEach((element) => {
          expect(element.id).toBe(customerTest5.id);
          expect(element.firstName).toBe(customerTest5.firstName);
          expect(element.lastName).toBe(customerTest5.lastName);
          expect(element.birthDate).toBe(customerTest5.birthDate);
        });

        done();
      });
  });
};

exports.getAllCustomersPaginatedSecondPartDescTest = () => {
  it('GET All Customers Paginated Second Part Desc - Positive.', (done) => {
    server.get('/api/customers?firstName=desc&lastName=desc&birthDate=desc')
      .send('offset=1')
      .send('limit=1')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.items.length).toBe(1);
        expect(res.body.offset).toBeDefined();
        expect(res.body.limit).toBeDefined();
        expect(res.body.href).toBeDefined();
        expect(res.body.first).toBeDefined();
        expect(res.body.last).toBeDefined();

        res.body.items.forEach((element) => {
          expect(element.id).toBe(customerTest4.id);
          expect(element.firstName).toBe(customerTest4.firstName);
          expect(element.lastName).toBe(customerTest4.lastName);
          expect(element.birthDate).toBe(customerTest4.birthDate);
        });

        done();
      });
  });
};

exports.getAllCustomersPaginatedThirdPartDescTest = () => {
  it('GET All Customers Paginated Third Part Desc - Positive.', (done) => {
    server.get('/api/customers?firstName=desc&lastName=desc&birthDate=desc')
      .send('offset=2')
      .send('limit=1')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.items.length).toBe(1);
        expect(res.body.offset).toBeDefined();
        expect(res.body.limit).toBeDefined();
        expect(res.body.href).toBeDefined();
        expect(res.body.first).toBeDefined();
        expect(res.body.last).toBeDefined();

        res.body.items.forEach((element) => {
          expect(element.id).toBe(customerTest1.id);
          expect(element.firstName).toBe(customerTest1.firstName);
          expect(element.lastName).toBe(customerTest1.lastName);
          expect(element.birthDate).toBe(customerTest1.birthDate);
        });

        done();
      });
  });
};

exports.getCustomerByIdTest = () => {
  it('GET Customer by Id - Positive.', (done) => {
    server.get(`/api/customers/${customerTest1.id}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.error).not.toBeDefined();
        expect(res.body.id).toBe(customerTest1.id);
        expect(res.body.firstName).toBe(customerTest1.firstName);
        expect(res.body.lastName).toBe(customerTest1.lastName);
        expect(res.body.age).toBeDefined();
        expect(res.body.joke).toBeDefined();

        done();
      });
  });
};

exports.getCustomerByFakeIdTest = () => {
  it('GET Customer by Fake Id - Negative.', (done) => {
    server.get(`/api/customers/FakeId`)
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(res.body.error).toBeDefined();

        done();
      });
  });
};
