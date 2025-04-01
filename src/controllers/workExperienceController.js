const workExperienceService = require('../services/workExperienceService');

exports.getWorkExperience = async (req, res, next) => {
    try {
        const workExperience = await workExperienceService.getWorkExperience();
        res.status(200).json(workExperience);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};