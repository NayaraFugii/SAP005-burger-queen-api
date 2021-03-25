const { Model } = require('sequelize');


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
      passwoard: {
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
      sequelize,
      modelName: 'User' 
    
    });

    Users.sync()
    return Users;
};