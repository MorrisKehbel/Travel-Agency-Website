import { Router } from "express";
import {
  getAllLocations,
  getLocationBySlug,
} from "../controllers/locationController.js";

export const locationRouter = Router();

locationRouter.get("/", getAllLocations);
// locationRouter.get("/search", getLocationBySearch);
locationRouter.get("/:slug", getLocationBySlug);
