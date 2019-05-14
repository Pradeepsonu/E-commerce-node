const knex = require('../db')

exports.insert = async (product) => {
    try {
        await knex.insert(product).table('products')
    }
    catch (err) {
        console.log(err)
        throw "Unable to insert product"
    }

}