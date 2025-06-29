import { Link } from "react-router";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-violet-100/90 backdrop-blur-md border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-xl text-gray-600 hover:text-black"
        >
          Travel Agency
        </Link>

        <div className="sm:hidden">
          <button
            className="btn btn-ghost btn-square"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex space-x-6">
          <NavLinks />
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden mt-2 space-y-2">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ onClick }) => (
  <>
    <Link
      to="/"
      onClick={onClick}
      className="block text-gray-600 font-semibold hover:text-black"
    >
      Home
    </Link>
    <Link
      to="/about"
      onClick={onClick}
      className="block text-gray-600 font-semibold hover:text-black"
    >
      About
    </Link>
    <Link
      to="/destinations"
      onClick={onClick}
      className="block text-gray-600 font-semibold hover:text-black"
    >
      Destinations
    </Link>
    <Link
      to="/contact"
      onClick={onClick}
      className="block text-gray-600 font-semibold hover:text-black"
    >
      Contact
    </Link>
  </>
);
