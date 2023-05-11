const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Dog",
    {
      dog_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      dog_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      height: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      TimeTamps: false,
    }
  );
};
