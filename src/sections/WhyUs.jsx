import {
  FaShieldAlt,
  FaBolt,
  FaHandHoldingUsd,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">MobileZone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go above and beyond to provide exceptional service
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="feature-card bg-white p-8 rounded-xl"
            data-aos="zoom-in"
          >
            <div className="feature-icon bg-blue-100 mx-auto">
              <FaShieldAlt className="text-primary text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
              6-Month Warranty
            </h3>
            <p className="text-gray-600 text-center">
              All our devices come with a comprehensive 6-month warranty for
              your peace of mind.
            </p>
          </div>

          <div
            className="feature-card bg-white p-8 rounded-xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="feature-icon bg-emerald-100 mx-auto">
              <FaBolt className="text-secondary text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
              Same-Day Repairs
            </h3>
            <p className="text-gray-600 text-center">
              Most repairs completed the same day with genuine parts and expert
              technicians.
            </p>
          </div>

          <div
            className="feature-card bg-white p-8 rounded-xl"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="feature-icon bg-blue-100 mx-auto">
              <FaHandHoldingUsd className="text-primary text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
              Best Prices Guaranteed
            </h3>
            <p className="text-gray-600 text-center">
              We offer the most competitive prices in Christchurch for both
              buying and selling devices.
            </p>
          </div>

          <div
            className="feature-card bg-white p-8 rounded-xl"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="feature-icon bg-emerald-100 mx-auto">
              <FaUserTie className="text-secondary text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
              Expert Advice
            </h3>
            <p className="text-gray-600 text-center">
              Our knowledgeable staff provide honest advice to help you make the
              best decision.
            </p>
          </div>
        </div>

        {/* Image + Commitment Text */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="MobileZone store"
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>

          {/* Commitment Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-600 mb-6">
              At MobileZone, we're committed to providing the best possible
              service to our customers. Our team undergoes regular training to
              stay up-to-date with the latest technology trends and repair
              techniques.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3" />
                <span className="text-gray-700">
                  100% genuine parts used in all repairs
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3" />
                <span className="text-gray-700">
                  Free diagnostics for all devices
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3" />
                <span className="text-gray-700">
                  No fix, no fee policy on repairs
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3" />
                <span className="text-gray-700">
                  Environmentally responsible recycling of old devices
                </span>
              </li>
            </ul>
            <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
