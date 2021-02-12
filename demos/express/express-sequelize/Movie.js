const { DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

class Movie extends Model {}

Movie.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.STRING },
    rating: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'Movie',
  }
);

module.exports = Movie;
