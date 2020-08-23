//https://sequelize.org/master/manual/getting-started.html#installing
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'sequelize-masterclass',
    define: {
        //Enable timestamps
        //Enable snake case on database
        timestamp: true,
        underscored: true,
    }
}

//npx sequelize db:create to create database
//npx sequelize migration:create --name=migration_name
//npx sequelize db:migrate
//npx sequelize db:migrate:undo to undo the last migration