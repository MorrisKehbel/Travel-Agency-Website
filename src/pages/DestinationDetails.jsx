import { useParams, Link, useLocation } from "react-router";

export const DestinationDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const locationData = location.state?.locationData;

  const card = locationData.find((data) => data.slug === slug);

  if (!card) {
    throw new Error("Destinations Details could not be loaded.");
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold text-gray-600 text-center my-4">
        {card.location}
      </h2>

      <img
        src={card.image}
        alt={card.location}
        className="rounded-lg mb-6 w-full max-h-96 object-cover"
      />
      <div className="flex justify-between flex-wrap sm:flex-nowrap items-center px-4">
        <p className="text-gray-600 font-semibold text-lg my-4">{card.desc}</p>
        <Link to="/destinations" className="btn btn-primary">
          Return
        </Link>
      </div>
    </div>
  );
};
