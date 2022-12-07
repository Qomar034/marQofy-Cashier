'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {foreignKey: "categoryId"})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    sales: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    vendor: DataTypes.STRING,
    status: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};