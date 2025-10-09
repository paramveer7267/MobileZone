import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../utils/api.js";
const SellPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    condition: "",
    deviceModel: "",
    contactMethod: "",
    subject: "New Sell Request",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await api.post("/send-email", form);

      if (res.data.success) {
        setStatus({ type: "success", message: "Your request has been sent!" });
        toast.success("Your sell request has been sent!");
        setForm({
          name: "",
          email: "",
          phone: "",
          deviceType: "",
          condition: "",
          deviceModel: "",
          contactMethod: "",
        });
        console.log("Form data:", form);
      } else {
        setStatus({ type: "error", message: "Failed to send. Try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Something went wrong!" });
    }

    setLoading(false);
  };

  return (
    <section
      className="relative bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 py-16 px-4 md:px-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left Info */}
        <div className="space-y-6 mt-10 text-white">
          <h2 className="text-white text-4xl font-bold">Sell Your Device</h2>
          <p className="text-gray-200">
            Fill up the form and our Team will get back to you within 24 hours
            with an offer.
          </p>
          <div className="space-y-4">
            <p>📞 Sydenham: +64 226 309 104 | Papanui: +64 226 309 104</p>
            <p>✉️ contact@mobilezone.co.nz</p>
            <p>📍 243 Colombo Street, Sydenham | 475 Papanui Road</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/95 rounded-xl shadow-lg p-6 md:p-8">
          <h3 className="text-3xl font-bold gradient-text mb-6 text-center">
            Device Quote
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="+64 226 309 104"
              />
            </div>

            {/* Device Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Device Type <span className="text-red-500">*</span>
              </label>
              <select
                name="deviceType"
                value={form.deviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select a device</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Tablet">Tablet</option>
                <option value="Laptop/Macbook">Laptop / Macbook</option>
              </select>
            </div>

            {/* Condition */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Condition <span className="text-red-500">*</span>
              </label>
              <textarea
                name="condition"
                value={form.condition}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Describe the condition of your device"
              ></textarea>
            </div>

            {/* Device Model */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Device Model <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="deviceModel"
                value={form.deviceModel}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="E.g. iPhone 14 Pro, Samsung Galaxy S22"
              />
            </div>

            {/* Contact Method */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                How do you want us to contact you?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {["Phone", "Email", "SMS"].map((method) => (
                  <label key={method} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={form.contactMethod === method}
                      onChange={handleChange}
                      required
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer p-4 text-white font-semibold py-3 rounded-lg bg-primary hover:bg-blue-600 hover:scale-105 active:scale-95 transition duration-300 w-full disabled:opacity-50"
            >
              {loading ? "Sending..." : "Get a Quote"}
            </button>
            {/* Status message */}
            {status && (
              <p
                className={`text-center font-medium ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SellPage;
