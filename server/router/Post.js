const express = require('express');
const requireLogin = require('../middlewares/requireLogin');
const { createPost, getAllPosts, userPosts } = require('../controllers/Post');
const { runValidation } = require('../validators/index');
const { createPostValidators } = require('../validators/post');
const router = express.Router()

router.get('/all',getAllPosts)
router.get('/userPosts',userPosts)
router.post('/create', createPostValidators, runValidation, requireLogin, createPost)

module.exports = router