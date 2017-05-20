
import supertest from 'supertest';
import expect from 'expect';

import customerTest1 from '../samples/customer1.json';
import customerTest4 from '../samples/customer4.json';
import customerTest5 from '../samples/customer5.json';

import app from '../../../server/server';

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
        expect(element.first_name).toExist();
        expect(element.last_name).toExist();
        expect(element.birth_date).toExist();
      });

      done();
    });
  });
};

exports.getAllCustomersPaginatedFirstPartAscTest = () => {
  it('GET All Customers Paginated First Part Asc - Positive.', (done) => {
    server.get('/api/customers?first_name=asc&last_name=asc&birth_date=asc')
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
        expect(element.first_name).toEqual(customerTest1.first_name);
        expect(element.last_name).toEqual(customerTest1.last_name);
        expect(element.birth_date).toEqual(customerTest1.birth_date);
      });

      done();
    });
  });
};

exports.getAllCustomersPaginatedSecondPartAscTest = () => {
  it('GET All Customers Paginated Second Part Asc- Positive.', (done) => {
    server.get('/api/customers?first_name=asc&last_name=asc&birth_date=asc')
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
        expect(element.first_name).toEqual(customerTest4.first_name);
        expect(element.last_name).toEqual(customerTest4.last_name);
        expect(element.birth_date).toEqual(customerTest4.birth_date);
      });

      done();
    });
  });
};

exports.getAllCustomersPaginatedThirdPartAscTest = () => {
  it('GET All Customers Paginated Third Part Asc - Positive.', (done) => {
    server.get('/api/customers?first_name=asc&last_name=asc&birth_date=asc')
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
        expect(element.first_name).toEqual(customerTest5.first_name);
        expect(element.last_name).toEqual(customerTest5.last_name);
        expect(element.birth_date).toEqual(customerTest5.birth_date);
      });

      done();
    });
  });
};

exports.getAllCustomersPaginatedFirstPartDescTest = () => {
  it('GET All Customers Paginated First Part Desc- Positive.', (done) => {
    server.get('/api/customers?first_name=desc&last_name=desc&birth_date=desc')
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
        expect(element.first_name).toEqual(customerTest5.first_name);
        expect(element.last_name).toEqual(customerTest5.last_name);
        expect(element.birth_date).toEqual(customerTest5.birth_date);
      });

      done();
    });
  });
};

exports.getAllCustomersPaginatedSecondPartDescTest = () => {
  it('GET All Customers Paginated Second Part Desc - Positive.', (done) => {
    server.get('/api/customers?first_name=desc&last_name=desc&birth_date=desc')
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
        expect(element.first_name).toEqual(customerTest4.first_name);
        expect(element.last_name).toEqual(customerTest4.last_name);
        expect(element.birth_date).toEqual(customerTest4.birth_date);
      });

      done();
    });
  });
};

exports.getAllCustomersPaginatedThirdPartDescTest = () => {
  it('GET All Customers Paginated Third Part Desc - Positive.', (done) => {
    server.get('/api/customers?first_name=desc&last_name=desc&birth_date=desc')
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
        expect(element.first_name).toEqual(customerTest1.first_name);
        expect(element.last_name).toEqual(customerTest1.last_name);
        expect(element.birth_date).toEqual(customerTest1.birth_date);
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
      expect(res.body.first_name).toEqual(customerTest1.first_name);
      expect(res.body.last_name).toEqual(customerTest1.last_name);
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
