const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Temperament",
    {
      temper_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      temper_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timesTapms: false,
    }
  );
};
