const knex = require('../db')

exports.getMens = async () => {
    const result = await knex.select("*").from("clothes").where({ category: 'men' });

    return result;
}

exports.getWomens = async () => {
    const result = await knex.select("*").from("clothes").where({ category: 'women' });

    return result;
}

exports.getKids = async () => {
    const result = await knex.select("*").from("clothes").where({ category: 'kids' });
    return result;
}