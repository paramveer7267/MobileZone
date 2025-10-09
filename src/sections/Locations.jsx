import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at our convenient Christchurch locations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location 1 */}
          <div
            className="location-card bg-gray-50 rounded-xl overflow-hidden shadow-lg"
            data-aos="zoom-in"
          >
            <a
              href="https://www.google.com/maps/dir//243+Colombo+Street,Sydenham,Christchurch"
              target="_blank"
              rel="noopener noreferrer"
              className="location-map relative h-64 w-full overflow-hidden block"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.639768604316!2d172.63021321527587!3d-43.548582179125736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a534c9c19ed%3A0x36ac4fc139da8eaa!2s243%20Colombo%20Street%2C%20Sydenham%2C%20Christchurch%208023%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1684505401050!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "blur(4px)",
                  pointerEvents: "none",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <FaMapMarkerAlt className="text-white text-4xl drop-shadow-lg" />
              </div>
            </a>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                MobileZone Sydenham
              </h3>
              <p className="text-gray-600 mb-4">
                243 Colombo Street, Sydenham, Christchurch 8023
              </p>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-primary mr-2" />
                <span className="text-gray-700">+64 226 309 104</span>
              </div>
              <div className="flex items-center mb-4">
                <FaClock className="text-primary mr-2" />
                <div>
                  <p className="text-gray-700">Mon-Fri: 10am - 6pm</p>
                  <p className="text-gray-700">Sat-Sun: 10am - 3pm</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/dir//243+Colombo+Street,Sydenham,Christchurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium"
                >
                  Get Directions <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Location 2 */}
          <div
            className="location-card bg-gray-50 rounded-xl overflow-hidden shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.google.com/maps/dir//475+Papanui+Road,Christchurch"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-64 w-full overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.210676127692!2d172.6062016!3d-43.505260699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318af72883f13d%3A0x1198b3a60a845353!2s475%20Papanui%20Road%2C%20Christchurch%208053%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1684506300000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "blur(4px)",
                  pointerEvents: "none",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <FaMapMarkerAlt className="text-white text-4xl drop-shadow-lg" />
              </div>
            </a>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                MobileZone Papanui
              </h3>
              <p className="text-gray-600 mb-4">
                475 Papanui Road, Christchurch 8053
              </p>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-primary mr-2" />
                <span className="text-gray-700">+64 226 309 104</span>
              </div>
              <div className="flex items-center mb-4">
                <FaClock className="text-primary mr-2" />
                <div>
                  <p className="text-gray-700">Mon-Fri: 10am - 6pm</p>
                  <p className="text-gray-700">Sat-Sun: 10am - 3pm</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/dir//475+Papanui+Road,Christchurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium"
                >
                  Get Directions <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
