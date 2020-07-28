const express = require('express');
const { getUserProfile, followUser, unfollowUser } = require('../controllers/User');
const  requireLogin  = require("../middlewares/requireLogin")
const router = express.Router()

router.get("/:id",requireLogin,getUserProfile)
router.put(`/follow`, requireLogin, followUser)
router.put(`/unfollow`, requireLogin, unfollowUser)

module.exports = router