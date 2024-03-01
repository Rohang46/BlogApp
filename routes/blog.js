const express = require('express');
const router = express.Router();

// Import Controller
const { dummyLink,likePost, unlikePost } = require("../controller/LikeController");
const {createComment}=require("../controller/CommentController")
const {createPost,getAllPosts}=require("../controller/PostController");


// Mapping Routes
router.get("/dummyroute", dummyLink); // GET route for dummyLink
router.post("/comments/create",createComment)
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

// Export Router
module.exports = router;
