'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessageRecipient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MessageRecipient.init({
    recipient_id: DataTypes.INTEGER,
    recipient_group_id: DataTypes.INTEGER,
    is_read: DataTypes.BOOLEAN,
    message_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MessageRecipient',
  });
  return MessageRecipient;
};