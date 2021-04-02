const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes)=>{
    class ProductsOrder extends Model {}

    ProductsOrder.init({
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      qnt: {
        type: DataTypes.INTEGER,
        allowNull: false    
      }
    }, {  
      sequelize,
      modelName: 'ProductsOrder' 
    
    });

    ProductsOrder.sync()
    return ProductsOrder;
};