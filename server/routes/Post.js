const express = require('express');
const requireLogin = require('../middlewares/requireLogin');
const { createPost, getAllPosts, userPosts } = require('../controllers/Post');
const { create } = require('../models/Post');
const router = express.Router()

router.get('/all',getAllPosts)
router.get('/userPosts',userPosts)
router.post('/create', requireLogin, createPost)

module.exports = router