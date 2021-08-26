const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

//users routes

router.get('/users', usersControllers.getUsers);
router.get('/users/:id', usersControllers.getUser);
router.post('/users', usersControllers.addUser);
router.put('/users/:id', usersControllers.updateUser);
router.delete('/users/:id', usersControllers.deleteUser);

module.exports = router;
