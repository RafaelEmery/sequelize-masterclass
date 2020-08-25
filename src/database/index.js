const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

//Enable the Sequelize by creating a new instance
const connection = new Sequelize(dbConfig);

//Enable the Models on connection
User.init(connection);
Address.init(connection);

//Enable the Models association
User.associate(connection.models);
Address.associate(connection.models);

//Exporting the configured database
module.exports = connection;