const { DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    version: { type: DataTypes.INTEGER, defaultValue: 1 },
    displayName: { type: DataTypes.STRING },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    userType: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['person', 'corporation']],
      },
    },
    street: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

module.exports = User;
