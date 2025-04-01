const express = require('express');
const router = express.Router();
const workExperienceController = require('../controllers/workExperienceController');

// Define your routes for the work experience section
router.get('/', workExperienceController.getWorkExperience);

module.exports = router;