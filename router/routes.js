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
router.get('/users', authenticateJWT, usersControllers.getUsers);
router.get('/users/:email', authenticateJWT, usersControllers.getUser);
router.post('/users', authenticateJWT, usersControllers.createUser);
router.delete('/users/:email', authenticateJWT, usersControllers.deleteUser);

//movies routes
router.get('/movies', authenticateJWT, moviesControllers.getMovies);
router.get('/movies/:title', authenticateJWT, moviesControllers.getMovie);
router.post('/movies', authenticateJWT, moviesControllers.addMovie);
router.put('/movies/:id', authenticateJWT, moviesControllers.updateMovie);
router.delete('/movies/:id', authenticateJWT, moviesControllers.deleteMovie);

//subscriptions routes
router.get(
  '/subscriptions',
  authenticateJWT,
  subscriptionsControllers.getSubscriptions
);
router.get(
  '/subscriptions/:type',
  authenticateJWT,
  subscriptionsControllers.getSubscription
);
router.post(
  '/subscriptions',
  authenticateJWT,
  subscriptionsControllers.addSubscription
);
router.put(
  '/subscriptions/:id',
  authenticateJWT,
  subscriptionsControllers.updateSubscription
);
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
  authenticateJWT,
  usersSubscriptionsControllers.getUsersSubscriptions
);
router.get(
  '/usersSubscriptions/:id',
  authenticateJWT,
  usersSubscriptionsControllers.getUserSubscription
);
router.post(
  '/usersSubscriptions/',
  authenticateJWT,
  usersSubscriptionsControllers.addUserSubscription
);
router.put(
  '/usersSubscriptions/:id',
  authenticateJWT,
  usersSubscriptionsControllers.updateUserSubscription
);
router.delete(
  '/usersSubscriptions/:id',
  authenticateJWT,
  usersSubscriptionsControllers.deleteUserSubscription
);
module.exports = router;
