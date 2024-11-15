// backend/controllers/contactController.js
const db = require('../config/db');

// Get all contact info
exports.getContact = (req, res) => {
    const sql = 'SELECT * FROM contact';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

// Create new contact info
exports.createContact = (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Contact added successfully!' });
    });
};
