const express = require('express');
const usersController = require('../controllers/usersController');
const { validateJWT, validateUsername, validatePassword, decode } = require('../middlewares');

const router = express.Router();

router.post('/', [validateUsername, validatePassword, usersController.signIn]);
router.get('/', [validateJWT, usersController.getAllUsers]);
router.get('/me', [decode])

module.exports = router;
