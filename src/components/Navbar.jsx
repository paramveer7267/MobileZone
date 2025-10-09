import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* <FaMobileAlt className="text-blue-600 text-2xl mr-2" />
              <span className="text-xl font-bold text-gray-900">
                Mobile<span className="text-blue-600">Zone</span>
              </span> */}
            <Link to="/">
              <img
                src="/mobilezone logo.png"
                alt="MobileZone Logo"
                className="h-14 md:w-full"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-gray-900 hover:text-blue-600 px-2 py-2 text-md font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-900 hover:text-blue-600 px-2 py-2 text-md font-medium"
            >
              Services
            </Link>
            <Link
              to="/why-us"
              className="text-gray-900 hover:text-blue-600 px-2 py-2 text-md font-medium"
            >
              Why Us
            </Link>
            <Link
              to="/locations"
              className="text-gray-900 hover:text-blue-600 px-2 py-2 text-md font-medium"
            >
              Locations
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 hover:text-blue-600 px-2 py-2 text-md font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu as absolute overlay */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            to="/why-us"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600"
          >
            Why Us
          </Link>
          <Link
            to="/locations"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600"
          >
            Locations
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
