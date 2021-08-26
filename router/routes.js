const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

//users routes

router.get('/users', usersControllers.getUsers);

module.exports = router;
