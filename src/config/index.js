const dbConfig = require("./db.config")
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect:dbConfig.DIALECT,
    operatorsAliases: false,
})


//const Form = require('../models/form.model')(sequelize, DataTypes);

module.exports = sequelize ;