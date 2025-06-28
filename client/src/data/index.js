import { getAllLocations, getLocationBySlug } from "../api/locations";

export const loadLocations = () => {
  return {
    locations: getAllLocations(),
  };
};

export const loadLocationBySlug = ({ params }) => {
  return {
    location: getLocationBySlug(params.slug),
  };
};
