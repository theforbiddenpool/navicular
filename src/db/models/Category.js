const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.belongsTo(models.User, { constraints: true });
      this.hasMany(models.Item, {
        constrains: false,
        foreignKey: {
          name: 'category_id',
          allowNull: true,
        },
      });
    }
  }

  Category.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: DataTypes.STRING(200),
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
