const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const moviesControllers = require('../controllers/moviesControllers.js');
const subscriptionsControllers = require('../controllers/subscriptionsControllers');
const moviesRequestsControllers = require('../controllers/moviesRequestsControllers');
const usersSubscriptionsControllers = require('../controllers/usersSubcriptionsControllers');
const loginControllers = require('../controllers/loginControllers');

//users routes
router.get('/users', usersControllers.getUsers);
router.get('/users/:id', usersControllers.getUser);
router.post('/users/register', usersControllers.addUser);
router.put('/users/:id', usersControllers.updateUser);
router.delete('/users/:id', usersControllers.deleteUser);
router.post('/date', usersControllers.dateTesting);

//login route
router.post('/login', loginControllers.loginUser);

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

//movies requests routes
router.get('/moviesRequests', moviesRequestsControllers.getMoviesRequests);
router.get('/moviesRequests/:id', moviesRequestsControllers.getMovieRequest);
router.post('/moviesRequests', moviesRequestsControllers.addMovieRequest);
router.put('/moviesRequests/:id', moviesRequestsControllers.updateMovieRequest);
router.delete(
  '/moviesRequests/:id',
  moviesRequestsControllers.deleteMovieRequest
);

//users subscriptions routes
router.get(
  '/usersSubscriptions/',
  usersSubscriptionsControllers.getUsersSubscriptions
);
router.get(
  '/usersSubscriptions/:id',
  usersSubscriptionsControllers.getUserSubscription
);
router.post(
  '/usersSubscriptions/',
  usersSubscriptionsControllers.addUserSubscription
);
module.exports = router;
