export const getAllLocations = async (abortSignal) => {
  try {
    const res = await fetch(`http://localhost:4001/locations`, {
      signal: abortSignal,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch locations");
    }
    const locations = await res.json();
    return locations;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw new Error(`Error fetching locations: ${error.message}`);
  }
};

export const getLocationBySlug = async (slug, abortSignal) => {
  try {
    const res = await fetch(`http://localhost:4001/locations/${slug}`, {
      signal: abortSignal,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch location");
    }
    const location = await res.json();
    return location;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw new Error(`Error fetching location: ${error.message}`);
  }
};

// export const getLocationBySearch = async (searchQuery, abortSignal) => {
//   try {
//     const res = await fetch(
//       `http://localhost:4001/search?query=${searchQuery}`,
//       {
//         signal: abortSignal,
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch locations");
//     }
//     const locations = await res.json();
//     return locations;
//   } catch (error) {
//     console.error("Error fetching locations:", error);
//   }
// };
