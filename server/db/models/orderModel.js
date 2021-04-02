const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes)=>{
    class Orders extends Model {}

    Orders.init({
      name_cliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
      table: {
        type: DataTypes.INTEGER,
        allowNull: false    
      },  
      status: {
        type: DataTypes.STRING,
        allowNull: false    
      }
    }, {  
      sequelize,
      modelName: 'Orders' 
    
    });

    Orders.sync()
    return Orders;
};