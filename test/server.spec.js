const app = require('../server');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('API Tests', function() {
  it('should return json with string', function(done) {
    request(app)
      .get('/api')
      .end(function(err, res) {
        expect(res.body.msg).to.be.a('string');
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });
  it('should return string', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.body).to.be.ok;
        done();
      });
  });
});
