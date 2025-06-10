import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold text-gray-600 text-center my-4">
        Find Your Next Student Adventure
      </h2>
      <p className="text-gray-600 text-center my-4">
        Whether you're dreaming of hackathons in Berlin, tech tours in Silicon
        Valley, or cultural deep-dives across Europe — we've got you covered.
        Our student trips combine learning, networking, and unforgettable
        memories, all at student-friendly prices. Let your next adventure start
        here.
      </p>
      <form className="max-w-3xl flex mt-6 border-1 rounded-lg border-black bg-gray-400 mx-auto">
        <input
          type="text"
          placeholder="Origin"
          name="origin"
          className="input bg-gray-400"
        />
        <input
          type="text"
          placeholder="Destination"
          name="destination"
          className="input bg-gray-400"
        />
        <input type="date" name="startDate" className="input bg-gray-400" />
        <input type="date" name="returnDate" className="input bg-gray-400" />
        <Link to="/destinations">
          <button className="btn btn-primary">search</button>
        </Link>
      </form>
    </div>
  );
};
