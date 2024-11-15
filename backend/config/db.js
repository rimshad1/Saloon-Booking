// backend/config/db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root', // MySQL username
    password: process.env.DB_PASSWORD || '', // MySQL password
    database: process.env.DB_NAME || 'saloon_booking', // Database name
    port: process.env.DB_PORT || 3306, // Default MySQL port
    connectionLimit: 10 // Maximum number of connections in the pool
});

// Check the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err.message);
        process.exit(1); // Exit the application if the connection fails
    } else {
        console.log('Connected to MySQL!');
        connection.release(); // Release the connection back to the pool
    }
});

// Export the pool as a promise-based version for easy use
const promisePool = pool.promise();

module.exports = promisePool;