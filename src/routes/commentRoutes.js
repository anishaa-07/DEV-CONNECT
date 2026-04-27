const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.get('/posts/:postId/comments', commentController.getPostComments);

module.exports = router;