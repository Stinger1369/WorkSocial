const express = require('express');
const router = express.Router();
const UserFollowersController = require('../controllers/UserFollowersController');

router.get('/users/:userId/followers', UserFollowersController.getUserFollowers);
router.post('/users/:userId/followers', UserFollowersController.followUser);
router.delete('/users/:userId/followers/:followerId', UserFollowersController.unfollowUser);

module.exports = router;
