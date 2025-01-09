'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecurringSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RecurringSchedule.belongsTo(models.Donor, { foreignKey: 'donorId' })
    }
  }
  RecurringSchedule.init({
    status: DataTypes.BOOLEAN,
    nextPaymentDate: DataTypes.DATE,
    donorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RecurringSchedule',
  });
  return RecurringSchedule;
};