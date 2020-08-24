const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

routes.get('/', (req, res) => {
    return res.json({
        hello: 'World'
    });
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AddressController.store);

module.exports = routes;