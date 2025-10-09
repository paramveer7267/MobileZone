import {
  FaMobileAlt,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div data-aos="fade-up">
            <div className="flex items-center mb-4">
              <FaMobileAlt className="text-primary text-2xl mr-2" />
              <span className="text-xl font-bold">
                Mobile<span className="text-primary">Zone</span>
              </span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for buying, selling, and repairing phones,
              laptops, and tablets in Christchurch.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/why-us"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Buy Devices
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Sell Devices
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Repair Services
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-400 hover:text-primary transition"
                >
                  Device Valuation
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new arrivals, special offers and other
              discount information.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2  rounded-l-lg bg-white text-gray-900 w-full"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-blue-600 px-4 py-2 rounded-r-lg"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MobileZone. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-primary">
              <FaFacebookF />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-secondary">
              <FaTwitter />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-primary">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-secondary">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
