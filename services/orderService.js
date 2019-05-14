const knex = require('../db')
exports.insert = async (orders) => {
    try {
        await knex.insert(orders).table('orders')
    } catch (err) {
        console.log(err)
        throw 'Unable to Place your order'
    }

}