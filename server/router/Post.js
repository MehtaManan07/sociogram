const express = require('express');
const requireLogin = require('../middlewares/requireLogin');
const { createPost, getAllPosts } = require('../controllers/Post');
const { runValidation } = require('../validators/index');
const { createPostValidators } = require('../validators/post');
const router = express.Router()

router.get('/all',getAllPosts)
router.post('/create', createPostValidators, runValidation, requireLogin, createPost)

module.exports = router