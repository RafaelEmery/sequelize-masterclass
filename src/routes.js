const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const User = require('./models/User');

routes.get('/', (req, res) => {
    return res.json({
        hello: 'World'
    });
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;