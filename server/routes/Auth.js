const express = require('express');
const { userRegisterValidator, userLoginValidator } = require('../validators/auth');
const { runValidation } = require('../validators/index');
const { register, login } = require('../controllers/Auth');

const router = express.Router()

router.post('/register',userRegisterValidator,runValidation, register)
router.post('/login',userLoginValidator,runValidation, login)

module.exports = router