const express = require('express');
const router = express.Router();

const PostCommentController = require('../controllers/PostCommentController');



router.get('/posts/:postId/comments', PostCommentController.getAllCommentsForPost);
router.post('/posts/:postId/comments', PostCommentController.createCommentForPost);
router.delete('/posts/:postId/comments/:commentId', PostCommentController.deleteComment);


module.exports = router;
