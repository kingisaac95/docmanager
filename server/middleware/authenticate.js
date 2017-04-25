const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorize = (req, res, next) => {
  const token = req.headers.authorization || req.headers['x-access-token'];
  if (token) {
    // verify token
    jwt.verify(token, process.env.SECRETE_KEY, (error, decoded) => {
      console.log('decoded', decoded)
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
}

const isAdmin = (req, res, next) => {
  const role = req.decoded.userData.roleId;

  if (role && role === 1) {
    return next();
  }
  return res.status(401).send({
    status: 401,
    message: "Error! You are not authorized to view this page"
  })
}

const isMyDocument = () => {

}

module.exports = {
  authorize,
  isAdmin,
  isMyDocument
}