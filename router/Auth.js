const express = require('express');
const { userRegisterValidator } = require('../validators/auth');
const { runValidation } = require('../validators/index');
const { register } = require('../controllers/Auth');
const router = express.Router()

router.post('/register',userRegisterValidator,runValidation, register)

module.exports = router