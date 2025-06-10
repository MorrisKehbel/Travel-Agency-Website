import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-violet-100 border-t-6 px-6 py-12 ">
      <div className="max-w-7xl grid grid-cols-1 text-center space-y-8 sm:space-y-2 sm:text-left sm:grid-cols-3 mx-auto justify-items-center ">
        <div className="flex flex-col">
          <h3 className="font-bold text-lg text-gray-600 mb-1">Service</h3>
          <Link
            to="/destinations"
            className="text-gray-600 font-semibold hover:text-black"
          >
            Destinations
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg text-gray-600 mb-1">Company</h3>
          <Link
            to="/about"
            className="text-gray-600 font-semibold hover:text-black"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 font-semibold hover:text-black"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            to="/"
            className="font-bold text-xl text-gray-600 hover:text-black"
          >
            Travel Agency
          </Link>
        </div>
      </div>
    </footer>
  );
};
