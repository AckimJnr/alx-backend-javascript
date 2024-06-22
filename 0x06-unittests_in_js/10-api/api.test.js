const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
  const url = 'http://localhost:7865';

  it('should return status 200', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return status 200 when :id is a number', (done) => {
    const cartId = 12;
    request(`${baseUrl}/${cartId}`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart ${cartId}`);
      done();
    });
  });

  it('should return status 404 when :id is NOT a number', (done) => {
    const invalidId = 'hello';
    request(`${baseUrl}/${invalidId}`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});