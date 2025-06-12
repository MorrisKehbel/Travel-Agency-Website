import { Link } from "react-router";

const locationData = [
  {
    slug: "tambon-khlong-sok",
    image:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Tambon Khlong Sok, Thailand",
    desc: "Explore lush rainforests, dramatic limestone cliffs, and wildlife in Thailand's stunning Khao Sok National Park.",
  },
  {
    slug: "arefu",
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Arefu, Romania",
    desc: "A picturesque village near the Carpathians, rich with Transylvanian history and mystical Dracula legends.",
  },
  {
    slug: "santorini",
    image:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Santorini, Greece",
    desc: "Enjoy iconic white-washed buildings, blue domes, and sunsets over the Aegean Sea on this volcanic island.",
  },
  {
    slug: "san-juan-bautista",
    image:
      "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "San Juan Bautista, Spain",
    desc: "A quiet Spanish town with cultural depth, traditional charm, and access to scenic coastal routes.",
  },
  {
    slug: "vysoké-tatry",
    image:
      "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Vysoké Tatry, Slovakia",
    desc: "Adventure awaits in Slovakia’s High Tatras: perfect for hiking, skiing, and breathtaking alpine views.",
  },
  {
    slug: "pariyaram",
    image:
      "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Pariyaram, India",
    desc: "Experience the calm of Kerala's backwaters, rich traditions, and tropical beauty in Pariyaram.",
  },
  {
    slug: "hallstatt",
    image:
      "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Hallstatt, Austria",
    desc: "A fairy-tale lakeside village surrounded by mountains — ideal for culture lovers and scenic explorers.",
  },
  {
    slug: "san-francisco",
    image:
      "https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "San Francisco, United States",
    desc: "Explore tech innovation, iconic landmarks like the Golden Gate Bridge, and vibrant urban life.",
  },
  {
    slug: "england",
    image:
      "https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "England, United Kingdom",
    desc: "Discover a mix of historic sites, modern cities, and rolling countryside — from London to the Lake District.",
  },
];

export const Destinations = () => {
  if (!locationData?.length) {
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
        {locationData.map((card) => (
          <div
            key={card.slug}
            className="bg-primary rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
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
                state={{ card }}
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
