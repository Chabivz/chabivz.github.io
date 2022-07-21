const jwt = require('jsonwebtoken');
const secret = 'mysecretsh';
const expiration = '2rh';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }


  } 
} 