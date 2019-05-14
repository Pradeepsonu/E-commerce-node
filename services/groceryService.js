const knex = require('../db');

exports.getGrocery = async () => {
    const result = await knex.select("*").from("groceries");
    console.log(result);
    return result;
}