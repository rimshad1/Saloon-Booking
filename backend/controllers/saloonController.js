// backend/controllers/saloonController.js
const db = require('../config/db');

// Get all saloons
exports.getSaloon = async (req, res) => {
    try {
        console.log('Attempting to connect to the database and fetch saloons...');
        const [rows] = await db.query('SELECT * FROM saloon');
        console.log('Query successful. Data fetched:', rows);
        res.status(200).json(rows);
    } catch (err) {
        console.error('Error fetching saloons:', err); // Log full error in the terminal
        res.status(500).json({ message: 'Server error', error: err.message }); // Send the error message back in the response
    }
};

// Get all saloons
exports.getSaloon = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM saloon');
        res.status(200).json(rows);
    } catch (err) {
        console.error('Error fetching saloons:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new saloon
exports.createSaloon = async (req, res) => {
    const { name, address, contact, services } = req.body;
    try {
        const sql = 'INSERT INTO saloon (name, address, contact, services) VALUES (?, ?, ?, ?)';
        const [result] = await db.query(sql, [name, address, contact, services]);
        res.status(201).json({ message: 'Saloon added successfully!', id: result.insertId });
    } catch (err) {
        console.error('Error adding saloon:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a saloon
exports.updateSaloon = async (req, res) => {
    const { name, address, contact, services } = req.body;
    try {
        const sql = 'UPDATE saloon SET name = ?, address = ?, contact = ?, services = ? WHERE id = ?';
        const [result] = await db.query(sql, [name, address, contact, services, req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Saloon not found' });
        }
        res.json({ message: 'Saloon updated successfully!' });
    } catch (err) {
        console.error('Error updating saloon:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a saloon
exports.deleteSaloon = async (req, res) => {
    try {
        const sql = 'DELETE FROM saloon WHERE id = ?';
        const [result] = await db.query(sql, [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Saloon not found' });
        }
        res.json({ message: 'Saloon deleted successfully!' });
    } catch (err) {
        console.error('Error deleting saloon:', err);
        res.status(500).json({ message: 'Server error' });
    }
};