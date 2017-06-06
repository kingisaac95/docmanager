import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default {
  authorize(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
      // verify token
      jwt.verify(token, process.env.SECRETE_KEY, (error, decoded) => {
        if (error) {
          res.status(400).send({
            status: false,
            message: 'The token you provided is incorrect.'
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
        message: 'You did not provide any access token.'
      });
    }
  },

  isAdmin(req, res, next) {
    const role = req.decoded.userData.role;
    if (role) {
      if (role === 1 || role === 2) {
        return next();
      }
    }
    return res.status(401).send({
      status: 401,
      message: 'Unauthorized Access. Please contact system administrator'
    });
  }
};
