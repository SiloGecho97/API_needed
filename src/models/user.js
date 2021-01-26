'use strict';
const {
  Model
} = require('sequelize');
const bcryptjs = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    password:DataTypes.STRING,
    username:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((u, options) => {
    u.password = bcryptjs.hashSync(u.password, 10);
    return u;
  });
  return User;
};