const { DataTypes } = require('sequelize');
const {sequelize, Sequelize} = require('../config/index')

module.exports = (sequelize, Sequelize) => {
    const createForm = sequelize.define("Form", {
        uniqueId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phonenumber: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        isGraduate: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })

    return createForm;
}
