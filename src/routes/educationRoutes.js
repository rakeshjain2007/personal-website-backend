const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

// Define your routes for the education section
router.get('/', educationController.getEducation);

module.exports = router;