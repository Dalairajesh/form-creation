  const {DataTypes} = require('sequelize')
  const db = require('../config/index')

    const Form = db.define('Form', {
      uniqueId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        
      },
      email: {
        type:DataTypes.STRING,
        allowNull:true,
        validate: {
            isEmail: true,
          },
      },
      phonenumber: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      isGraduate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    });
  
    

  
    module.exports = Form