import { Link } from "react-router";
import { use } from "react";

export const DestinationCard = ({ promise }) => {
  const location = use(promise);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold text-gray-600 text-center my-4">
        {location.name}
      </h2>

      <img
        src={location.cover}
        alt={location.name}
        className="rounded-lg mb-6 w-full max-h-96 object-cover"
      />
      <div className="flex justify-between flex-wrap sm:flex-nowrap items-center px-4">
        <p className="text-gray-600 font-semibold text-lg my-4">
          {location.description}
        </p>
        <Link to="/destinations" className="btn btn-primary">
          Return
        </Link>
      </div>
    </div>
  );
};
