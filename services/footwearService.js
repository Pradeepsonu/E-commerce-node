const knex = require('../db');

exports.getMen = async () => {
    const result = await knex.select("*").from("footwear").where({ category: 'men' });
    console.log(result);
    return result;
}

exports.getWomen = async () => {
    const result = await knex.select("*").from("footwear").where({ category: 'women' });
    console.log(result);
    return result;
}