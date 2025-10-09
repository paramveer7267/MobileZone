import { useState } from "react";
import { FaShoppingCart, FaDollarSign, FaTools } from "react-icons/fa";
import Repair from "../components/Repair";
import Sell from "../components/Sell";
import Buy from "../components/Buy";

const Services = () => {
  const [activeFlow, setActiveFlow] = useState("buy");

  return (
    <section id="services" className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto py-15 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your tech needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Buy Devices */}
          <a href="#buy">
            <div
              onClick={() => setActiveFlow("buy")}
              className={`bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer ${
                activeFlow === "buy" ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaShoppingCart className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Buy Devices
              </h3>
              <p className="text-gray-600 text-center">
                Get the latest smartphones, laptops, and tablets at competitive
                prices with warranty options.
              </p>
            </div>
          </a>
          {/* Sell Devices */}
          <a href="#sell">
            <div
              onClick={() => setActiveFlow("sell")}
              className={`bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer ${
                activeFlow === "sell" ? "ring-2 ring-secondary" : ""
              }`}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaDollarSign className="text-secondary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Sell Devices
              </h3>
              <p className="text-gray-600 text-center">
                Get instant cash for your used devices with our fair valuation
                process and quick payment.
              </p>
            </div>
          </a>

          {/* Repair Services */}
          <a href="#repair">
            <div
              onClick={() => setActiveFlow("repair")}
              className={`bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer ${
                activeFlow === "repair" ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaTools className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Repair Services
              </h3>
              <p className="text-gray-600 text-center">
                Expert repairs for all devices with genuine parts and quick
                turnaround times.
              </p>
            </div>
          </a>
        </div>

        {/* Flows */}
        {activeFlow === "buy" && <Buy />}
        {activeFlow === "sell" && <Sell />}
        {activeFlow === "repair" && <Repair />}
      </div>
    </section>
  );
};

export default Services;
