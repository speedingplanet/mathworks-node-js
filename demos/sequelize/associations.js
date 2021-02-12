const { Sequelize, DataTypes, Model } = require('sequelize');

const dbFile = __dirname + '/employees.db';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
});

class Employee extends Model {}

Employee.init(
  {
    employeeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: 'Employee',
  }
);

async function main() {
  await Employee.sync({ force: true });

  await Employee.create({ firstName: 'John', lastName: 'Paxton' });
  await Employee.create({ firstName: 'Andreina', lastName: 'Castillo' });

  let emp1 = await Employee.findByPk(1);

  console.log('emp1: ', emp1.toJSON());
}

main();
