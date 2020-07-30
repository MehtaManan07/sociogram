const jwt = require("jsonwebtoken");
const User = require("../models/User");

/* 
const expressJwt = require('express-jwt')
exports.requireLogin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth",
    algorithms: ['HS256'] 
  });
*/

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }
    const { _id } = payload;
    User.findById(_id).then((userData) => {
      req.user = userData;
      next();
    });
  });
};
