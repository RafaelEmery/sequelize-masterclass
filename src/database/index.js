const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

//Enable the Sequelize by creating a new instance
const connection = new Sequelize(dbConfig);

//Enable the Models
User.init(connection);

//Exporting the configured database
module.exports = connection;