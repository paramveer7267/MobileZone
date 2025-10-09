import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
            data-aos="zoom-in"
          >
            {/* Contact Information */}
            <h3
              className="text-2xl font-bold text-gray-900 mb-6 text-center"
              data-aos="fade-up"
            >
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Locations */}
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Our Locations
                </h4>
                <p className="text-gray-600">243 Colombo Street, Sydenham</p>
                <p className="text-gray-600">475 Papanui Road</p>
              </div>

              {/* Phone */}
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <FaPhoneAlt className="text-secondary text-xl" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Phone Numbers
                </h4>
                <p className="text-gray-600">Sydenham: +64 226 309 104</p>
                <p className="text-gray-600">Papanui: +64 226 309 104</p>
              </div>

              {/* Email */}
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Email
                </h4>
                <p className="text-gray-600">contact@mobilezone.co.nz</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 text-center" data-aos="fade-up">
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                Business Hours
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <p className="font-medium text-gray-700">Sydenham Location</p>
                  <p className="text-gray-600">Mon-Fri: 10am - 6pm</p>
                  <p className="text-gray-600">Sat-Sun: 10am - 3pm</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-gray-700">Papanui Location</p>
                  <p className="text-gray-600">Mon-Fri: 10am - 6pm</p>
                  <p className="text-gray-600">Sat-Sun: 10am - 3pm</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 text-center" data-aos="fade-up">
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.facebook.com/share/1AgvtM9ZB7/?mibextid=wwXIfr"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/mobilezonenz?igsh=dmlvOWY4Z203c2dl"
                  className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
