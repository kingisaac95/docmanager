const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorize = (req, res, next) => {
  const token = req.headers.authorization || req.headers['x-access-token'];
  if (token) {
    // verify token
    jwt.verify(token, process.env.SECRETE_KEY, (error, decoded) => {
      if (error) {
        res.status(400).send({
          status: false,
          message: "Error! Failed to authenticate token."
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if no token was provided
    return res.status(401).send({
      status: 401,
      message: "Error! No access token provided."
    });
  }
};

const isAdmin = (req, res, next) => {
  const role = req.decoded.userData.role;
  if (role && role === 'Super-Admin' || role === 'Admin') {
    return next();
  }
  return res.status(401).send({
    status: 401,
    message: "Error! Unauthorized Access. Please contact system administrator"
  });
};

const isAdminOrUser = (req, res, next) => {
  const role = req.decoded.userData.role;
  const userId = req.body.documentId;
  const currentUser = req.decoded.userData.userId;
  if (role === 1 || currentUser === userId) {
    return next();
  }
  return res.status(401).send({
    status: 401,
    message: "Error! Unauthorized to perform this operation. Please contact system administrator"
  });
};

module.exports = {
  authorize,
  isAdmin,
  isAdminOrUser
}