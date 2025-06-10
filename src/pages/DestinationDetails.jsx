import { useParams, Link } from "react-router";

const locationData = [
  {
    slug: "tambon-khlong-sok",
    image:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Tambon Khlong Sok, Thailand",
    text: "Explore lush rainforests, dramatic limestone cliffs, and wildlife in Thailand's stunning Khao Sok National Park.",
  },
  {
    slug: "arefu",
    image:
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Arefu, Romania",
    text: "A picturesque village near the Carpathians, rich with Transylvanian history and mystical Dracula legends.",
  },
  {
    slug: "santorini",
    image:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Santorini, Greece",
    text: "Enjoy iconic white-washed buildings, blue domes, and sunsets over the Aegean Sea on this volcanic island.",
  },
  {
    slug: "san-juan-bautista",
    image:
      "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "San Juan Bautista, Spain",
    text: "A quiet Spanish town with cultural depth, traditional charm, and access to scenic coastal routes.",
  },
  {
    slug: "vysoké-tatry",
    image:
      "https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Vysoké Tatry, Slovakia",
    text: "Adventure awaits in Slovakia’s High Tatras: perfect for hiking, skiing, and breathtaking alpine views.",
  },
  {
    slug: "pariyaram",
    image:
      "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Pariyaram, India",
    text: "Experience the calm of Kerala's backwaters, rich traditions, and tropical beauty in Pariyaram.",
  },
  {
    slug: "hallstatt",
    image:
      "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Hallstatt, Austria",
    text: "A fairy-tale lakeside village surrounded by mountains — ideal for culture lovers and scenic explorers.",
  },
  {
    slug: "san-francisco",
    image:
      "https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "San Francisco, United States",
    text: "Explore tech innovation, iconic landmarks like the Golden Gate Bridge, and vibrant urban life.",
  },
  {
    slug: "england",
    image:
      "https://images.pexels.com/photos/2114206/pexels-photo-2114206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "England, United Kingdom",
    text: "Discover a mix of historic sites, modern cities, and rolling countryside — from London to the Lake District.",
  },
];

export const DestinationDetails = () => {
  const { slug } = useParams();
  const destination = locationData.find((dest) => dest.slug === slug);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold text-gray-600 text-center my-4">
        {destination.location}
      </h2>

      <img
        src={destination.image}
        alt={destination.location}
        className="rounded-lg mb-6 w-full max-h-96 object-cover"
      />
      <div className="flex justify-between flex-wrap sm:flex-nowrap items-center px-4">
        <p className="text-gray-600 font-semibold text-lg my-4">
          {destination.text}
        </p>
        <Link to="/destinations" className="btn btn-primary">
          Return
        </Link>
      </div>
    </div>
  );
};
