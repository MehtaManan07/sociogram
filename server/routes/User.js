const express = require('express');
const { getUserProfile } = require('../controllers/User');
const  requireLogin  = require("../middlewares/requireLogin")
const router = express.Router()

router.get("/:id",requireLogin,getUserProfile)

module.exports = router