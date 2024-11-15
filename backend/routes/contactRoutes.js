// backend/routes/contactRoutes.js
const express = require('express');
const { getContact, createContact } = require('../controllers/contactController');
const router = express.Router();

router.get('/', getContact);
router.post('/', createContact);

module.exports = router;
