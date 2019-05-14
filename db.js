const knex = require('knex')({
    client: 'pg',
    version: '7.9',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Login@1234',
        database: 'ecommerce'
    }
});

module.exports = knex