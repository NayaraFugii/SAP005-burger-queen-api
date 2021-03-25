const { DataTypes, Model } = require('sequelize');
const Database = require('./index')

module.exports = (sequelize, DataTypes)=>{
    class Users extends Model {}

    Users.init({
      
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false    
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false    
      },
      restaurant: {
        type: DataTypes.STRING,
        allowNull: false    
      }
    }, {  
      sequelize: Database,
      modelName: 'User' 
    
    });
     Users.sync();
};