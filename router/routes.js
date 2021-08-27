const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const moviesControllers = require('../controllers/moviesControllers.js');
const subscriptionsControllers = require('../controllers/subscriptionsControllers');

//users routes
router.get('/users', usersControllers.getUsers);
router.get('/users/:id', usersControllers.getUser);
router.post('/users', usersControllers.addUser);
router.put('/users/:id', usersControllers.updateUser);
router.delete('/users/:id', usersControllers.deleteUser);

//movies routes
router.get('/movies', moviesControllers.getMovies);
router.get('/movies/:id', moviesControllers.getMovie);
router.post('/movies', moviesControllers.addMovie);
router.put('/movies/:id', moviesControllers.updateMovie);
router.delete('/movies/:id', moviesControllers.deleteMovie);

//subscriptions routes
router.get('/subscriptions', subscriptionsControllers.getSubscriptions);
router.get('/subscriptions/:id', subscriptionsControllers.getSubscription);
router.post('/subscriptions', subscriptionsControllers.addSubscription);
router.put('/subscriptions/:id', subscriptionsControllers.updateSubscription);
router.delete(
  '/subscriptions/:id',
  subscriptionsControllers.deleteSubscription
);

module.exports = router;
