const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'node-capsule_local',
    username: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: 5432,
	dialect: 'postgres',
});

const modelDefiners = [
	// Add models here...
	// require('./models/item'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sequelize;