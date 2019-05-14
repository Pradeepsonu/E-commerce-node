const knex = require('../db')

exports.getHeads = async () => {
    const result = await knex.select("*").from("accessories").where({ category: 'headphone' });
    console.log(result);
    return result;
}

exports.getCovers = async () => {
    const result = await knex.select("*").from("accessories").where({ category: 'backcover' });
    console.log(result);
    return result;
}

exports.getDrives = async () => {
    const result = await knex.select("*").from("accessories").where({ category: 'drive' });
    console.log(result);
    return result;
}