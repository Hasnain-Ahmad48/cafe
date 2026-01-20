import React, {useState} from "react";
import {Calendar, Clock, Users, ChevronDown} from "lucide-react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "Friends Meetup ",
    occasionOther: "",
    date: "",
    time: "10:00 AM – 12:00 PM",
    guests: 2,
    requests: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email Address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (formData.guests < 1) newErrors.guests = "Minimum 1 person";
    if (formData.guests > 8) newErrors.guests = "Maximum 8 guests";
    if (!formData.date) newErrors.date = "Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const whatsappNumber = "923484674394";
    const message = `New Table Reservation
    Name:${formData.name}
    Email:${formData.email}
    phone:${formData.phone}
    Occasion:${formData.occasion}
    Date:${formData.date}
    Time:${formData.time}
    Guests:${formData.guests}
    Special Request:${formData.requests || "None"}
    `;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-[#05110d] text-[#f4f1ea] font-sans">
      {/* Hero Section */}
      <div className="relative h-[35vh] md:h-[40vh] w-full overflow-hidden">
        <img
          src="/table1.jpg"
          alt="Reserve a Table"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#05110d]/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-3 text-[#f4f1ea] tracking-wide">
            Reserve Your Table
          </h1>
          <p className="text-lg md:text-xl font-light text-[#f4f1ea] opacity-90">
            Celebrate moments, meetings, and memories with us
          </p>
        </div>
      </div>

      {/* Reservation Form Section */}
      <div className="flex justify-center -mt-16 px-4 pb-20 relative z-10 animate-fade-in-up">
        <div className="w-full max-w-[800px] bg-[#354b44] rounded-[20px] shadow-2xl p-6 md:p-10 border border-[#617c73]/30">
          {isSubmitted ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#a7ddb8]/20 mb-6 scale-110">
                <Calendar className="w-12 h-12 text-[#a7ddb8]" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#f4f1ea] mb-4">
                Reservation Confirmed!
              </h2>
              <p className="text-[#a7ddb8] text-lg mb-2">
                Thank you, {formData.name.split(" ")[0]}!
              </p>
              <p className="text-[#f4f1ea]/80">
                We’ll contact you shortly at {formData.phone} to confirm your
                reservation.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-[#a7ddb8] hover:text-[#f4f1ea] underline underline-offset-4"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Basic Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#a7ddb8] mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-[#05110d]/30 border ${
                      errors.name ? "border-red-400/50" : "border-[#617c73]"
                    } rounded-lg px-4 py-3 text-[#f4f1ea] placeholder-[#617c73] focus:outline-none focus:border-[#a7ddb8] transition-all duration-300`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-300/90 text-xs mt-1 ml-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#a7ddb8] mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-[#05110d]/30 border ${
                      errors.email ? "border-red-400/50" : "border-[#617c73]"
                    } rounded-lg px-4 py-3 text-[#f4f1ea] placeholder-[#617c73] focus:outline-none focus:border-[#a7ddb8] transition-all duration-300`}
                    placeholder="Your E-mail"
                  />
                  {errors.email && (
                    <p className="text-red-300/90 text-xs mt-1 ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#a7ddb8] mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-[#05110d]/30 border ${
                      errors.phone ? "border-red-400/50" : "border-[#617c73]"
                    } rounded-lg px-4 py-3 text-[#f4f1ea] placeholder-[#617c73] focus:outline-none focus:border-[#a7ddb8] transition-all duration-300`}
                    placeholder="03XX-XXXXXXX"
                  />
                  {errors.phone && (
                    <p className="text-red-300/90 text-xs mt-1 ml-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Occasion */}
                <div>
                  <label className="block text-sm font-medium text-[#a7ddb8] mb-2">
                    Occasion
                  </label>
                  <div className="relative group">
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full bg-[#617c73]/30 border border-[#617c73] rounded-lg px-4 py-3 text-[#f4f1ea] focus:outline-none focus:bg-[#395249] appearance-none cursor-pointer transition-all duration-300"
                    >
                      <option>Birthday Party </option>
                      <option>Office Gathering </option>
                      <option>Family Dinner </option>
                      <option>Anniversary </option>
                      <option>Friends Meetup </option>
                      <option>Other</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#617c73] group-hover:text-[#a7ddb8] transition-colors pointer-events-none"
                      size={18}
                    />
                  </div>
                  {formData.occasion === "Other" && (
                    <input
                      type="text"
                      name="occasionOther"
                      value={formData.occasionOther}
                      onChange={handleChange}
                      placeholder="Please specify"
                      className="mt-2 w-full bg-[#05110d]/30 border border-[#617c73] rounded-lg px-4 py-2 text-sm text-[#f4f1ea] focus:outline-none focus:border-[#a7ddb8] animate-fade-in"
                    />
                  )}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#a7ddb8] mb-2">
                    Date
                  </label>
                  <div className="relative group">
                    <input
                      type="date"
                      name="date"
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full bg-[#05110d]/30 border ${
                        errors.date ? "border-red-400" : "border-[#617c73]"
                      } rounded-lg px-4 py-3 text-[#f4f1ea] focus:outline-none focus:border-[#a7ddb8] appearance-none transition-all duration-300`}
                    />
                    {/* CSS handles calendar icon in most modern browsers, could explicitly add logic if needed */}
                  </div>
                  {errors.date && (
                    <p className="text-red-300/90 text-xs mt-1 ml-1">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#a7ddb8] mb-2">
                    Time Slot
                  </label>
                  <div className="relative group">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-[#05110d]/30 border border-[#617c73] rounded-lg px-4 py-3 text-[#f4f1ea] focus:outline-none focus:border-[#a7ddb8] appearance-none cursor-pointer transition-all duration-300"
                    >
                      <option>10:00 AM – 12:00 PM</option>
                      <option>1:00 PM – 3:00 PM</option>
                      <option>6:00 PM – 8:00 PM</option>
                      <option>8:00 PM – 10:00 PM</option>
                    </select>
                    <Clock
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#617c73] group-hover:text-[#a7ddb8] transition-colors pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-[#a7ddb8] mb-2">
                  Number of Guests
                </label>
                <div className="relative group">
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    max="8"
                    value={formData.guests}
                    onChange={handleChange}
                    className={`w-full bg-[#05110d]/30 border ${
                      errors.guests ? "border-red-400" : "border-[#617c73]"
                    } rounded-lg px-4 py-3 text-[#f4f1ea] focus:outline-none focus:border-[#a7ddb8] transition-all duration-300`}
                  />
                  <Users
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#617c73] group-hover:text-[#a7ddb8] transition-colors pointer-events-none"
                    size={18}
                  />
                </div>
                <div className="flex justify-between items-start mt-2 px-1">
                  <p className="text-[#7fa989] text-xs">
                    Maximum table capacity is 8 guests
                  </p>
                  {(formData.guests > 8 || formData.guests == 8) && (
                    <p className="text-[#a7ddb8] text-xs font-semibold animate-pulse">
                      Large Group? Contact Us directly.
                    </p>
                  )}
                  {errors.guests && (
                    <p className="text-red-300 text-xs">{errors.guests}</p>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-[#a7ddb8] mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="requests"
                  rows="3"
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder="Any special arrangements or notes? (Cake, décor, seating preference)"
                  className="w-full bg-[#05110d]/30 border border-[#617c73] rounded-lg px-4 py-3 text-[#f4f1ea] placeholder-[#617c73] focus:outline-none focus:border-[#a7ddb8] resize-none transition-all duration-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={
                    !formData.name || !formData.email || !formData.phone
                  }
                  className="w-full bg-[#ffffff] text-[#05110d] font-bold text-lg py-4 rounded-full hover:bg-[#7fa989] transition-all duration-300 transform hover:scale-[1.01] shadow-xl hover:shadow-[#a7ddb8]/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
