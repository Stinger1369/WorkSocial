const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserController = require('../controllers/UserController');
const verifyToken = require('../Middleware/Jwt');

// Configuration du stockage pour Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });


router.get('/', UserController.getAllUsers);
router.get('/:id', verifyToken,UserController.getUserById);
router.post('/', upload.single('image'), UserController.createUser);
router.post('/login', UserController.loginUser);
router.put('/:id', verifyToken, UserController.updateUser);
router.delete('/:id', verifyToken, UserController.deleteUser);

module.exports = router;
