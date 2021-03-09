const { sequelize } = require('../../models');

const getHealth = () => {
    try {
        sequelize.authenticate();

        return 'Health check successful!';
    } catch (error) {
        //TODO: error handing
    }
}

module.exports = {
    getHealth
};