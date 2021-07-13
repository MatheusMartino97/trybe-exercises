const express = require('express');
const usersController = require('../controllers/usersController');
const { validateJWT } = require('../middlewares');

const router = express.Router();

router.post('/', [usersController.signIn]);
router.get('/', [validateJWT, usersController.getAllUsers]);

module.exports = router;
