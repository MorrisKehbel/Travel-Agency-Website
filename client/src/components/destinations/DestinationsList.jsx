import { Link, useLocation } from "react-router";
import { use } from "react";

export const DestinationsList = ({ promise }) => {
  const location = useLocation();
  const inputLocation = location.state?.inputValue;

  const locations = use(promise);

  const showLocations = [
    ...locations.filter((item) =>
      item.name?.toLowerCase().includes(inputLocation?.toLowerCase())
    ),
    ...locations.filter(
      (item) => !item.name?.toLowerCase().includes(inputLocation?.toLowerCase())
    ),
  ];

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
        {showLocations.map((card, i) => (
          <div
            key={card.id}
            className={`bg-primary rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all ${
              i === 0
                ? "col-span-1 sm:col-span-2 lg:col-span-3 md:mb-4 lg:mb-8"
                : "col-span-1"
            }`}
          >
            <img
              src={card.cover}
              alt={card.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link
                to={`/destinations/${card.slug}`}
                key={card.id}
                className="text-white hover:text-gray-200 font-medium"
              >
                {card.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
