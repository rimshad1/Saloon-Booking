// backend/models/aboutModel.js
const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    title: String,
    description: String,
});

module.exports = mongoose.model('About', AboutSchema);
