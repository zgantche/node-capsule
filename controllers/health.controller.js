const healthService = require('../services/health.service');

const getHealth = async (req, res, next) => {
    try {
        const result = await healthService.getHealth();

        // TODO: replace temporary hardcoded success
        return res.status(200).send();
    } catch (err) {
        // TODO: create error handing
    }
}