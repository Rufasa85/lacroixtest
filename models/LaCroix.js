const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class LaCroix extends Model {}

LaCroix.init(
  {
    // add properites here, ex:
    flavor: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = LaCroix;
