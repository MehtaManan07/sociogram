const express = require("express");
const requireLogin = require("../middlewares/requireLogin");
const {
  createPost,
  getAllPosts,
  userPosts,
  updateLikes,
  unLike,
  addComment,
  getPostById,
  deletePost,
} = require("../controllers/Post");
const router = express.Router();

router.get("/all", requireLogin, getAllPosts);
router.get("/userPosts", requireLogin, userPosts);
router.get("/post/:postId", requireLogin, getPostById);

router.post("/create", requireLogin, createPost);

router.put("/like", requireLogin, updateLikes);
router.put("/unlike", requireLogin, unLike);
router.put("/addComment", requireLogin, addComment);

router.delete('/delete/:postId', requireLogin, deletePost)

module.exports = router;
