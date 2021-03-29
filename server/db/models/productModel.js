const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes)=>{
    class Products extends Model {}

    Products.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false    
      },  
      flavor: {
        type: DataTypes.STRING,
        allowNull: true    
      },    
      complement: {
        type: DataTypes.STRING,
        allowNull: true    
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false 
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false    
      },
      sub_type: {
        type: DataTypes.STRING,
        allowNull: false    
      }
    }, {  
      sequelize,
      modelName: 'Products' 
    
    });

    Products.sync()
    return Products;
};