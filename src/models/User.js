const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        //init method from Model
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize: connection
        });
    }
}

module.exports = User