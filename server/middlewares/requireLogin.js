/* 
const expressJwt = require('express-jwt')
exports.requireLogin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth",
    algorithms: ['HS256'] 
  });
*/

const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    const { _id } = payload;
    User.findById(_id).then((userData) => {
      console.log(userData);
      req.user = userData;
      next();
    });
  });
};
