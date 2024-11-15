// backend/routes/serviceRoutes.js
const express = require('express');
const { getService, createService } = require('../controllers/serviceController');
const router = express.Router();

router.get('/', getService);
router.post('/', createService);

module.exports = router;
