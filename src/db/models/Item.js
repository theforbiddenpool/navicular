const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      this.belongsTo(models.List, { constraints: true });
      this.belongsTo(models.Category, { constraints: false });
    }
  }

  Item.init({
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    quantity: DataTypes.FLOAT,
    unit: DataTypes.STRING(30),
    notes: DataTypes.STRING(255),
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
  });
  return Item;
};
