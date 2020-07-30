const express = require('express');
const { getUserProfile, followUser, unfollowUser, updateProfile } = require('../controllers/User');
const  requireLogin  = require("../middlewares/requireLogin")
const router = express.Router()

router.get("/:id",requireLogin,getUserProfile)

router.put('/edit/profile/:userId',requireLogin,updateProfile)
router.put(`/follow`, requireLogin, followUser)
router.put(`/unfollow`, requireLogin, unfollowUser)

module.exports = router