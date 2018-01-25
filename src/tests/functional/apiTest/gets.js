
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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.items.length).toEqual(3);
        expect(res.body.offset).toExist();
        expect(res.body.limit).toExist();
        expect(res.body.href).toExist();
        expect(res.body.first).toExist();
        expect(res.body.last).toExist();

        res.body.items.forEach((element) => {
          expect(element.id).toExist();
          expect(element.firstName).toExist();
          expect(element.lastName).toExist();
          expect(element.birthDate).toExist();
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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.items.length).toEqual(1);
        expect(res.body.offset).toExist();
        expect(res.body.limit).toExist();
        expect(res.body.href).toExist();
        expect(res.body.first).toExist();
        expect(res.body.last).toExist();

        res.body.items.forEach((element) => {
          expect(element.id).toEqual(customerTest1.id);
          expect(element.firstName).toEqual(customerTest1.firstName);
          expect(element.lastName).toEqual(customerTest1.lastName);
          expect(element.birthDate).toEqual(customerTest1.birthDate);
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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.items.length).toEqual(1);
        expect(res.body.offset).toExist();
        expect(res.body.limit).toExist();
        expect(res.body.href).toExist();
        expect(res.body.first).toExist();
        expect(res.body.last).toExist();

        res.body.items.forEach((element) => {
          expect(element.id).toEqual(customerTest4.id);
          expect(element.firstName).toEqual(customerTest4.firstName);
          expect(element.lastName).toEqual(customerTest4.lastName);
          expect(element.birthDate).toEqual(customerTest4.birthDate);
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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.items.length).toEqual(1);
        expect(res.body.offset).toExist();
        expect(res.body.limit).toExist();
        expect(res.body.href).toExist();
        expect(res.body.first).toExist();
        expect(res.body.last).toExist();

        res.body.items.forEach((element) => {
          expect(element.id).toEqual(customerTest5.id);
          expect(element.firstName).toEqual(customerTest5.firstName);
          expect(element.lastName).toEqual(customerTest5.lastName);
          expect(element.birthDate).toEqual(customerTest5.birthDate);
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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.items.length).toEqual(1);
        expect(res.body.offset).toExist();
        expect(res.body.limit).toExist();
        expect(res.body.href).toExist();
        expect(res.body.first).toExist();
        expect(res.body.last).toExist();

        res.body.items.forEach((element) => {
          expect(element.id).toEqual(customerTest5.id);
          expect(element.firstName).toEqual(customerTest5.firstName);
          expect(element.lastName).toEqual(customerTest5.lastName);
          expect(element.birthDate).toEqual(customerTest5.birthDate);
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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.items.length).toEqual(1);
        expect(res.body.offset).toExist();
        expect(res.body.limit).toExist();
        expect(res.body.href).toExist();
        expect(res.body.first).toExist();
        expect(res.body.last).toExist();

        res.body.items.forEach((element) => {
          expect(element.id).toEqual(customerTest4.id);
          expect(element.firstName).toEqual(customerTest4.firstName);
          expect(element.lastName).toEqual(customerTest4.lastName);
          expect(element.birthDate).toEqual(customerTest4.birthDate);
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
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.items.length).toEqual(1);
        expect(res.body.offset).toExist();
        expect(res.body.limit).toExist();
        expect(res.body.href).toExist();
        expect(res.body.first).toExist();
        expect(res.body.last).toExist();

        res.body.items.forEach((element) => {
          expect(element.id).toEqual(customerTest1.id);
          expect(element.firstName).toEqual(customerTest1.firstName);
          expect(element.lastName).toEqual(customerTest1.lastName);
          expect(element.birthDate).toEqual(customerTest1.birthDate);
        });

        done();
      });
  });
};

exports.getCustomerByIdTest = () => {
  it('GET Customer by Id - Positive.', (done) => {
    server.get(`/api/customers/${customerTest1.id}`)
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(res.body.error).toNotExist();
        expect(res.body.id).toEqual(customerTest1.id);
        expect(res.body.firstName).toEqual(customerTest1.firstName);
        expect(res.body.lastName).toEqual(customerTest1.lastName);
        expect(res.body.age).toExist();
        expect(res.body.joke).toExist();

        done();
      });
  });
};

exports.getCustomerByFakeIdTest = () => {
  it('GET Customer by Fake Id - Negative.', (done) => {
    server.get(`/api/customers/FakeId`)
      .end((err, res) => {
        expect(res.status).toEqual(404);
        expect(res.body.error).toExist();

        done();
      });
  });
};
