import { Location } from "../models/Location.js";
import { Op } from "sequelize";

export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();

    if (!locations) {
      return res.status(404).json({ message: "No locations found" });
    }

    return res.status(200).json(locations);
  } catch (error) {
    console.error("Error fetching locations:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getLocationBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const location = await Location.findOne({
      where: {
        slug: {
          [Op.iLike]: `%${slug}%`,
        },
      },
    });

    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    return res.status(200).json(location);
  } catch (error) {
    console.error("Error fetching location:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// export const getLocationBySearch = async (req, res) => {
//   try {
//     const { query } = req.query;

//     if (!query) {
//       return res.status(400).json({ error: "Missing search query" });
//     }

//     const location = await Location.findOne({
//       where: {
//         name: {
//           [Op.iLike]: `%${query}%`,
//         },
//       },
//     });

//     if (!location) {
//       return res.status(404).json({ message: "No matching location found" });
//     }

//     res.status(200).json(location);
//   } catch (error) {
//     console.error("Error fetching location:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
