'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.MessageRecipient,{
        foreignKey:'message_id',
        as:'recipientMessage',
        sourceKey:'id',
      })
    }
  }
  Message.init({
    sender_id: DataTypes.INTEGER,
    body: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};