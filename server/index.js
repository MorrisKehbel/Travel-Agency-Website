import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { connectDB } from "./db/index.js";
import { locationRouter } from "./routes/locationRoutes.js";

connectDB();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/locations", locationRouter);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
