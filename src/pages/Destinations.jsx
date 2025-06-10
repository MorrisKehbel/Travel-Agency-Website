import { Link } from "react-router";

const cards = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
    text: "Tambon Khlong Sok, Thailand",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
    text: "Arefu, Romania",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
    text: "Santorini, Greece",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg",
    text: "San Juan Bautista, Spain",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg",
    text: "Vysoké Tatry, Slovakia",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg",
    text: "Pariyaram, India",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg",
    text: "Hallstatt, Austria",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg",
    text: "San Francisco, United States",
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg",
    text: "England, United Kingdom",
  },
];

export const Destinations = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-center text-2xl font-bold text-gray-600">
        Explore All Destinations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <img
              src={card.image}
              alt={card.text}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link
                to={`/destinations/${card.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium self-end"
              >
                {card.text}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
