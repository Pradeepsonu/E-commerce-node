const knex = require('../db')

exports.getMobiles = async () => {
    const result = await knex.select("*").from("electronics").where({ category: 'mobile' });

    return result;
}

exports.getTabs = async () => {
    const result = await knex.select("*").from("electronics").where({ category: 'tab' });

    return result;
}

exports.getLaptops = async () => {
    const result = await knex.select("*").from("electronics").where({ category: 'laptop' });

    return result;
}