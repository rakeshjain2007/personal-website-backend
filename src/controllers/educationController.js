const educationService = require('../services/educationService');

exports.getEducation = async (req, res, next) => {
    try {
        const education = await educationService.getEducation();
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};