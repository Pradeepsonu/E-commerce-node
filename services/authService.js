const knex = require('../db');
exports.login = async (user) => {
    try {
        debugger;
        const login = await knex('users').where({ 'username': user.username, 'password': user.password })
        if ((user.username === login[0].username) && (user.password === login[0].password)) {
            return true;
        }
    }
    catch (err) {
        console.log(err)
        throw "Invalid Credentials";
    }
}

exports.insert = async (users) => {
    try {
        await knex.insert(users).table('users')
    } catch (err) {
        console.log(err)
        throw 'Unable to register user'
    }

}