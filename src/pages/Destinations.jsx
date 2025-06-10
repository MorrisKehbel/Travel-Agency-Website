import { Link } from "react-router";

const cards = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Tambon Khlong Sok, Thailand",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Arefu, Romania",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Santorini, Greece",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "San Juan Bautista, Spain",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Vysoké Tatry, Slovakia",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Pariyaram, India",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Hallstatt, Austria",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "San Francisco, United States",
  },
  {
    id: 9,
    image:
      "https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "England, United Kingdom",
  },
];

export const Destinations = () => {
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
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-primary rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <img
              src={card.image}
              alt={card.text}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link
                to={`/destinations/${card.id}`}
                className="text-white hover:text-gray-200 font-medium"
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
