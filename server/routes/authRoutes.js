const express = require('express');
const { registerUser, loginUser, logoutUser, getUser } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Register user route
router.post('/register', registerUser);

// Login user route
router.post('/login', loginUser);

// Dashboard route (protected, requires token)
router.get('/dashboard', protect, (req, res) => {
  res.status(200).json({ message: 'Welcome to the dashboard!' });
});

// Get user information (protected, requires token)
router.get('/user', protect, getUser);  // Add this route for getting user info

// Logout route
router.post('/logout', logoutUser);

module.exports = router;
