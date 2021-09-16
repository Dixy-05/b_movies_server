const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const moviesControllers = require('../controllers/moviesControllers.js');
const subscriptionsControllers = require('../controllers/subscriptionsControllers');
const moviesRequestsControllers = require('../controllers/moviesRequestsControllers');
const usersSubscriptionsControllers = require('../controllers/usersSubcriptionsControllers');
const authControllers = require('../controllers/authControllers');
const { authenticateJWT } = require('../controllers/authenticateJwt');

//auth routes
router.post('/register', authControllers.registerUser);
router.post('/login', authControllers.loginUser);

//users routes
// router.post('/users', authenticateJWT, usersControllers.createUser);
router.get('/users', authenticateJWT, usersControllers.getUsers);
router.get('/users/:email', authenticateJWT, usersControllers.getUser);
router.put('/users/:id', authenticateJWT, usersControllers.updateUser);
router.delete('/users/:email', authenticateJWT, usersControllers.deleteUser);

//movies routes
router.get('/movies', authenticateJWT, moviesControllers.getMovies);
router.get('/movies/:id', authenticateJWT, moviesControllers.getMovie);
router.post('/movies', authenticateJWT, moviesControllers.addMovie);
router.put('/movies/:id', authenticateJWT, moviesControllers.updateMovie);
router.delete('/movies/:id', authenticateJWT, moviesControllers.deleteMovie);

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
router.post(
  '/usersSubscriptions/',
  usersSubscriptionsControllers.updateUserSubscription
);
router.post(
  '/usersSubscriptions/',
  usersSubscriptionsControllers.deleteUserSubscription
);
module.exports = router;
