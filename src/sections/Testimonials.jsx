import { FaStar, FaUser } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Greer Te Kahu",
      location: "Christchurch",
      time: "2 days ago",
      text: `"Awesome speedy on the spot service as always. A returning customer. The guys are lovely, sat and waited for not even 5 minutes. iPhone screen replace, new screen protector..."`,
      bg: "bg-blue-100",
      iconColor: "text-primary",
    },
    {
      name: "Kirsten Holmes",
      location: "Christchurch",
      time: "1 week ago",
      text: `"Highly recommend i have had many phones fixed at this shop and brought refurbished phones and no problems at all. Great guys there. They go above and beyond for there customers."`,
      bg: "bg-emerald-100",
      iconColor: "text-secondary",
    },
    {
      name: "Jason Raxworthy",
      location: "Christchurch",
      time: "3 weeks ago",
      text: `"Excellent service. They replaced my damaged cell phone screen in 10 minutes for a reasonable cost. Had a good chat with the owner who was very friendly."`,
      bg: "bg-blue-100",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of happy customers in Christchurch
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Rating + Time */}
              <div className="flex items-center mb-6">
                <div className="rating-stars flex mr-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">{t.time}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6">{t.text}</p>

              {/* User Info */}
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center mr-4`}
                >
                  <FaUser className={t.iconColor} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
