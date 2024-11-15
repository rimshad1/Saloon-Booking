// backend/routes/adminRoutes.js
const express = require('express');
const { adminLogin, verifyToken } = require('../controllers/adminController');
const router = express.Router();

// Admin login route
router.post('/login', adminLogin);

// Example of a protected route (admin must be logged in)
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'You have access to this protected route!' });
});

module.exports = router;
