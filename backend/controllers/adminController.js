// backend/controllers/adminController.js
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin Login
exports.adminLogin = (req, res) => {
    const { username, password } = req.body;
    
    const sql = 'SELECT * FROM admin WHERE username = ?';
    db.query(sql, [username], async (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (result.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const admin = result[0];

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    });
};

// Middleware to protect routes
exports.verifyToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};