import { Link, useLocation } from "react-router";
import { locationData } from "../data/locationData";

export const Destinations = () => {
  const location = useLocation();
  const inputLocation = location.state?.inputValue;

  const showLocations =
    [
      ...locationData.filter((item) =>
        item.location?.toLowerCase().includes(inputLocation?.toLowerCase())
      ),
      ...locationData.filter(
        (item) =>
          !item.location?.toLowerCase().includes(inputLocation?.toLowerCase())
      ),
    ] || locationData;

  if (!showLocations?.length) {
    throw new Error("Destinations could not be loaded.");
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold text-gray-600 text-center my-4">
        Explore All Destinations
      </h2>
      <p className="text-gray-600 text-center my-4">
        Discover exciting and affordable travel spots curated just for software
        engineering students.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {showLocations.map((card, i, locationData) => (
          <div
            key={card.slug}
            className={`bg-primary rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all ${
              i === 0
                ? "col-span-1 sm:col-span-2 lg:col-span-3 md:mb-4 lg:mb-8"
                : "col-span-1"
            }`}
          >
            <img
              src={card.image}
              alt={card.location}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link
                to={`/destinations/${card.slug}`}
                key={card.slug}
                state={{ locationData }}
                className="text-white hover:text-gray-200 font-medium"
              >
                {card.location}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
