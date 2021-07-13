const express = require('express');
const usersController = require('../controllers/usersController');
const { validateJWT, validateUsername, validatePassword } = require('../middlewares');

const router = express.Router();

router.post('/', [validateUsername, validatePassword, usersController.signIn]);
router.get('/', [validateJWT, usersController.getAllUsers]);
router.get('/me', [validateJWT, usersController.getUser])

module.exports = router;
