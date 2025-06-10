import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="py-8 px-4 text-center text-2xl font-bold">
      <h1 className="text-gray-600">Find Your Next Student Adventure</h1>
      <form className="max-w-7xl flex mt-4 border-1 rounded-lg border-black bg-gray-400 mx-auto">
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
