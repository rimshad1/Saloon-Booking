// backend/models/saloonModel.js
const mongoose = require('mongoose');

const SaloonSchema = new mongoose.Schema({
    name: String,
    address: String,
    contact: String,
    services: [String],
});

module.exports = mongoose.model('Saloon', SaloonSchema);
