// backend/controllers/aboutController.js
const db = require('../config/db');

// Get about info
exports.getAbout = (req, res) => {
    const sql = 'SELECT * FROM about';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

// Update about info
exports.updateAbout = (req, res) => {
    const { title, description } = req.body;
    const sql = 'UPDATE about SET title = ?, description = ? WHERE id = ?';
    db.query(sql, [title, description, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'About updated successfully!' });
    });
};
