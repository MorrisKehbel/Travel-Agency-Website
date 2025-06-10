import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-violet-100/90 backdrop-blur-md border-b-6 px-6 py-4">
      <div className="max-w-7xl flex justify-between mx-auto items-center flex-wrap sm:flex-nowrap">
        <Link
          to="/"
          className="font-bold text-xl text-gray-600 hover:text-black"
        >
          Travel Agency
        </Link>
        <div className="space-x-4 flex flex-wrap">
          <Link to="/" className="text-gray-600 font-semibold hover:text-black">
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 font-semibold hover:text-black"
          >
            About
          </Link>
          <Link
            to="/destinations"
            className="text-gray-600 font-semibold hover:text-black"
          >
            Destinations
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 font-semibold hover:text-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
