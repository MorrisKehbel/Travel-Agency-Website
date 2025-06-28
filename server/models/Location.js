import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";

export const Location = sequelize.define(
  "location",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    alpha2code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
    },
    alpha3code: {
      type: DataTypes.CHAR(3),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Location.sync();
