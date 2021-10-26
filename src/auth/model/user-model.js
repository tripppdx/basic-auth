'use strict';

const { Sequelize, DataTypes } = require('sequelize');
let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
const sequelize = new Sequelize(DATABASE_URL);

const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Users;
