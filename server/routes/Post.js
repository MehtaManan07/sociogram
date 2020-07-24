const express = require('express');
const requireLogin = require('../middlewares/requireLogin');
const { createPost, getAllPosts, userPosts } = require('../controllers/Post');
const router = express.Router()

router.get('/all', requireLogin, getAllPosts)
router.get('/userPosts', requireLogin, userPosts)
router.post('/create', requireLogin, createPost)

module.exports = router