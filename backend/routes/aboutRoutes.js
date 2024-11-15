// backend/routes/aboutRoutes.js
const express = require('express');
const { getAbout, updateAbout } = require('../controllers/aboutController');
const router = express.Router();

router.get('/', getAbout);
router.put('/:id', updateAbout);

module.exports = router;
