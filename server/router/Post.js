const express = require('express');
const requireLogin = require('../middlewares/requireLogin');
const { createPost } = require('../controllers/Post');
const { runValidation } = require('../validators/index');
const { createPostValidators } = require('../validators/post');
const router = express.Router()

router.post('/create', createPostValidators, runValidation, requireLogin, createPost)

module.exports = router