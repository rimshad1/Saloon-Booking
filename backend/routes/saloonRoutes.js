// backend/routes/saloonRoutes.js
const express = require('express');
const { getSaloon, createSaloon } = require('../controllers/saloonController');
const router = express.Router();

router.get('/', getSaloon);
router.post('/', createSaloon);

module.exports = router;
