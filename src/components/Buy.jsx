import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { devices } from "../constants/index.js";
import { toast } from "react-hot-toast";
import api from "../utils/api.js";
const Buy = () => {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const [contactMethod, setContactMethod] = useState("phone");
  const [contactValue, setContactValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const buys = ["New", "Used", "Refurbished"];

  // ✅ Submit request
  const handleSubmit = async () => {
    setLoading(true);
    setStatus(null);

    const formData = {
      deviceType: selectedDevice,
      deviceModel: selectedBrand,
      condition: selectedType,
      contactMethod,
      phone: contactMethod === "phone" ? contactValue : "",
      email: contactMethod === "email" ? contactValue : "",
      subject: "New Buy Request",
    };

    try {
      const res = await api.post("/send-email", formData);

      if (res.data.success) {
        setStatus({
          type: "success",
          message: "✅ Your buy request has been sent!",
        });
        toast.success("Your buy request has been sent!");
        // Reset
        setStep(1);
        setSelectedDevice(null);
        setSelectedBrand("");
        setSelectedType(null);
        setContactValue("");
      } else {
        setStatus({ type: "error", message: "❌ Failed to send. Try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "⚠️ Something went wrong!" });
    }

    setLoading(false);
  };

  return (
    <div className="mt-12 scroll-mt-24" id="buy">
      {/* Stepper */}
      <div className="relative flex justify-between items-center mb-12">
        <div className="absolute top-5 left-40 xl:w-230 h-[2px] bg-gray-300"></div>
        <div
          className="absolute top-5 left-[12.5%] h-[2px] bg-primary transition-all duration-300"
          style={{ width: `${((step - 1) / 3) * 75}%` }}
        ></div>

        {["Device Type", "Brand/Model", "Buy Type", "Cart"].map(
          (label, idx) => {
            const num = idx + 1;
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center relative z-10"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold transition ${
                    step >= num
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-500 border-gray-300"
                  }`}
                >
                  {num}
                </div>
                <span
                  className={`mt-2 text-xs sm:text-sm font-semibold text-center ${
                    step === num ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          }
        )}
      </div>

      {/* Steps */}
      <AnimatePresence mode="wait">
        {/* Step 1: Device */}
        {step === 1 && (
          <Motion.div
            key="step1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-center text-2xl font-bold mb-8">
              Please Select Device You Want to Buy
            </h2>
            <div className="flex justify-center mx-auto max-w-4xl">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {devices.map((device, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedDevice(device.name);
                      setStep(2);
                    }}
                    className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg p-3 transition transform hover:-translate-y-1"
                  >
                    <img
                      src={device.img}
                      alt={device.name}
                      loading="lazy"
                      className="w-full h-40 md:h-50 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-center font-bold text-sm sm:text-base">
                      {device.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>
        )}

        {/* Step 2: Brand Input */}
        {step === 2 && (
          <Motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-center text-2xl font-bold mb-8">
              Enter Your Brand/Model
            </h2>
            <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (selectedBrand.trim()) {
                    setStep(3);
                  }
                }}
              >
                <input
                  type="text"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  placeholder="Enter brand/model"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!selectedBrand.trim()}
                  className={`w-full py-2 rounded-lg shadow font-semibold ${
                    !selectedBrand.trim()
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-primary text-white hover:scale-105 transition"
                  }`}
                >
                  Next
                </button>
              </form>
            </div>
          </Motion.div>
        )}

        {/* Step 3: Buy Type */}
        {step === 3 && (
          <Motion.div
            key="step3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-center text-2xl font-bold mb-8">
              Select Buy Type
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {buys.map((buy, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedType(buy);
                      setStep(4);
                    }}
                    className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg p-4 transition transform hover:-translate-y-1 flex flex-col items-center"
                  >
                    <h3 className="text-center font-semibold text-sm sm:text-base">
                      {buy}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>
        )}

        {/* Step 4: Cart + Contact */}
        {step === 4 && (
          <Motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-center text-2xl font-bold mb-8">Your Cart</h2>
            <div className="bg-white max-w-2xl mx-auto rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="mb-6">
                <div className="text-gray-600 text-sm sm:text-base">
                  ✅ Device:{" "}
                  <span className="font-semibold">{selectedDevice}</span>
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  ✅ Brand/Model:{" "}
                  <span className="font-semibold">{selectedBrand}</span>
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  ✅ Buy Type:{" "}
                  <span className="font-semibold">{selectedType}</span>
                </div>
              </div>

              {/* Contact Method */}
              <div className="w-full mb-4 text-center">
                <p className="font-semibold mb-2 text-gray-700">
                  How should we contact you?
                </p>
                <div className="flex gap-6 mb-4 justify-center">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="contact"
                      value="phone"
                      checked={contactMethod === "phone"}
                      onChange={() => {
                        setContactMethod("phone");
                        setContactValue("");
                      }}
                    />
                    Phone
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="contact"
                      value="email"
                      checked={contactMethod === "email"}
                      onChange={() => {
                        setContactMethod("email");
                        setContactValue("");
                      }}
                    />
                    Email
                  </label>
                </div>
                <input
                  type={contactMethod === "phone" ? "tel" : "email"}
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  placeholder={
                    contactMethod === "phone"
                      ? "Enter your phone number"
                      : "Enter your email address"
                  }
                  className="w-64 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                disabled={
                  !selectedDevice ||
                  !selectedBrand.trim() ||
                  !selectedType ||
                  !contactValue.trim() ||
                  loading
                }
                onClick={handleSubmit}
                className={`mt-6 px-6 py-2 rounded-lg shadow text-sm sm:text-base cursor-pointer ${
                  !selectedDevice ||
                  !selectedBrand.trim() ||
                  !selectedType ||
                  !contactValue.trim()
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-primary text-white hover:scale-105 hover:bg-blue-100 transition"
                }`}
              >
                {loading ? "Submitting..." : "Proceed to Quote"}
              </button>

              {/* Status Message */}
              {status && (
                <p
                  className={`mt-4 text-sm font-semibold ${
                    status.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Buy;
