const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.List, {
        constraints: false,
        foreignKey: 'user_id',
      });
    }
  }

  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(35),
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
