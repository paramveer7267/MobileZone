import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {
  const imgs = ["/wall1.webp", "/wall3.webp", "/wall2.webp"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % imgs.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [current, imgs.length]);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 text-white min-h-[100vh] pb-10 flex items-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="px-6 md:px-10 lg:px-16 relative z-10 flex items-center w-full mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
              Repair, Buy & Sell{" "}
              <span className="bg-gradient-to-r from-blue-300 to-teal-400 bg-clip-text text-transparent">
                Mobile Devices, Tablets & Laptops
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0">
              Fast, reliable repairs for phones, tablets, laptops, and MacBooks.
              We also buy and sell new, used, and refurbished devices.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/repair"
                // onClick={(e) => {
                //   e.preventDefault();
                //   document
                //     .getElementById("services")
                //     .scrollIntoView({ behavior: "smooth" });
                //   document.getElementById("repairButton").click();
                // }}
                // target="_blank"
                // rel="noopener noreferrer"
                className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition text-center text-sm sm:text-base"
              >
                Get Repair Quote
              </Link>
              <Link
                to="/sell"
                // onClick={(e) => {
                //   e.preventDefault();
                //   document
                //     .getElementById("services")
                //     .scrollIntoView({ behavior: "smooth" });
                //   document.getElementById("sellButton").click();
                // }}
                className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FaShoppingCart /> Sell Your Phone
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {imgs.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-50 sm:h-80 md:h-96 object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// "https://docs.google.com/forms/d/e/1FAIpQLSdF9S7OnfpDWgc7R9XUancE2zyXYkyEs7UegxKUXkTtNXY0ZQ/viewform?usp=sharing&ouid=109035762461964235858"
// no-reply@mobilezone.co.nz
// Christchruch100$