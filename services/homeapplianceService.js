const knex = require('../db')

exports.getTvs = async () => {
    const result = await knex.select("*").from("homes").where({ category: 'tv' });
    console.log(result);
    return result;
}

exports.getFridges = async () => {
    const result = await knex.select("*").from("homes").where({ category: 'fridge' });
    console.log(result);
    return result;
}

exports.getWashings = async () => {
    const result = await knex.select("*").from("homes").where({ category: 'wash' });
    console.log(result);
    return result;
}

exports.getAcs = async () => {
    const result = await knex.select("*").from("homes").where({ category: 'ac' });
    console.log(result);
    return result;
}