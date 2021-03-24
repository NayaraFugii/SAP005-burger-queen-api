const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

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
  sequelize,
  modelName: 'User' 

});


module.exports = Users;