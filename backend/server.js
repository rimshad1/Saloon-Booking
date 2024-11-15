// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db'); // Import MySQL connection

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Use CORS middleware only once

// Import routes
const aboutRoutes = require('./routes/aboutRoutes');
const contactRoutes = require('./routes/contactRoutes');
const saloonRoutes = require('./routes/saloonRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Define routes
app.use('/api/about', aboutRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/saloon', saloonRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/admin', adminRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});