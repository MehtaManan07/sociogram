const express = require('express');
const { getUserProfile } = require('../controllers/User');
const router = express.Router()

router.get("/:id",getUserProfile)

module.exports = router