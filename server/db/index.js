import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(process.env.PG_URI);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connected and synced successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);

    try {
      await sequelize.close();
    } catch (closeErr) {
      console.error("Failed to close DB connection:", closeErr);
    }

    process.exit(1);
  }
};
