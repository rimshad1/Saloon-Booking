// backend/controllers/serviceController.js
const db = require('../config/db');

// Get all services
exports.getService = (req, res) => {
    const sql = 'SELECT * FROM service';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

// Create a new service
exports.createService = (req, res) => {
    const { name, price, description } = req.body;
    const sql = 'INSERT INTO service (name, price, description) VALUES (?, ?, ?)';
    db.query(sql, [name, price, description], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Service added successfully!' });
    });
};

// Update a service
exports.updateService = (req, res) => {
    const { name, price, description } = req.body;
    const sql = 'UPDATE service SET name = ?, price = ?, description = ? WHERE id = ?';
    db.query(sql, [name, price, description, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Service updated successfully!' });
    });
};

// Delete a service
exports.deleteService = (req, res) => {
    const sql = 'DELETE FROM service WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Service deleted successfully!' });
    });
};
