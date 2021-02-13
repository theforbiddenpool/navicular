const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      this.belongsTo(models.List, { constraints: true });
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
  });
  return Item;
};
