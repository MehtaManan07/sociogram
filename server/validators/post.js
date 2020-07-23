const { check } = require("express-validator");

exports.createPostValidators = [
  check("title", "Title is invalid").not().isEmpty().isLength({ max: 32 }),
  check("body", "Body is invalid").not().isEmpty().isLength({ min: 10 }),
  check("image","Image is required").not().isEmpty()
];
