import React, {useState} from "react";
import {Calendar, Clock, Users, ChevronDown,Link} from "lucide-react";

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
    <div className="min-h-screen bg-earth-dark text-earth-light font-sans">
      {/* Hero Section */}
      <div className="relative h-[35vh] md:h-[40vh] w-full overflow-hidden">
        <img
          src="/table1.jpg"
          alt="Reserve a Table"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#05110d]/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-3 text-earth-light tracking-wide">
            Reserve Your Table
          </h1>
          <p className="text-lg md:text-xl font-light text-earth-light opacity-90">
            Celebrate moments, meetings, and memories with us
          </p>
        </div>
      </div>

      {/* Reservation Form Section */}
      <div className="flex justify-center -mt-16 px-4 pb-20 relative z-10 animate-fade-in-up">
        <div className="w-full max-w-[800px] bg-earth-hover rounded-[20px] shadow-2xl p-6 md:p-10 border border-earth-card/30">
          {isSubmitted ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-earth-accent/20 mb-6 scale-110">
                <Calendar className="w-12 h-12 text-earth-accent" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-earth-light mb-4">
                Reservation Confirmed!
              </h2>
              <p className="text-earth-accent text-lg mb-2">
                Thank you, {formData.name.split(" ")[0]}!
              </p>
              <p className="text-earth-light/80">
                We’ll contact you shortly at {formData.phone} to confirm your
                reservation.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-earth-accent hover:text-[#f4f1ea] underline underline-offset-4"
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
                  <label className="block text-sm font-medium text-earth-accent mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-earth-dark/30 border ${
                      errors.name ? "border-red-400/50" : "border-earth-card"
                    } rounded-lg px-4 py-3 text-[#f4f1ea] placeholder-earth-card focus:outline-none focus:border-earth-accent transition-all duration-300`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-300/90 text-xs mt-1 ml-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-accent mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-earth-dark/30 border ${
                      errors.email ? "border-red-400/50" : "border-earth-card"
                    } rounded-lg px-4 py-3 text-[#f4f1ea] placeholder-earth-card focus:outline-none focus:border-earth-accent transition-all duration-300`}
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
                  <label className="block text-sm font-medium text-earth-accent mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-earth-dark/30 border ${
                      errors.phone ? "border-red-400/50" : "border-earth-card"
                    } rounded-lg px-4 py-3 text-[#f4f1ea] placeholder-earth-card focus:outline-none focus:border-earth-accent transition-all duration-300`}
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
                  <label className="block text-sm font-medium text-earth-accent mb-2">
                    Occasion
                  </label>
                  <div className="relative group">
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full bg-[#617c73]/30 border border-earth-card rounded-lg px-4 py-3 text-[#f4f1ea] focus:outline-none focus:bg-earth-hover appearance-none cursor-pointer transition-all duration-300"
                    >
                      <option>Birthday Party </option>
                      <option>Office Gathering </option>
                      <option>Family Dinner </option>
                      <option>Anniversary </option>
                      <option>Friends Meetup </option>
                      <option>Other</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-earth-card group-hover:text-earth-accent transition-colors pointer-events-none"
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
                      className="mt-2 w-full bg-[#05110d]/30 border border-earth-card rounded-lg px-4 py-2 text-sm text-[#f4f1ea] focus:outline-none focus:border-earth-accent animate-fade-in"
                    />
                  )}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-earth-accent mb-2">
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
                        errors.date ? "border-red-400" : "border-earth-card"
                      } rounded-lg px-4 py-3 text-[#f4f1ea] focus:outline-none focus:border-earth-accent appearance-none transition-all duration-300`}
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
                  <label className="block text-sm font-medium text-earth-accent mb-2">
                    Time Slot
                  </label>
                  <div className="relative group">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-earth-dark/30 border border-earth-card rounded-lg px-4 py-3 text-[#f4f1ea] focus:outline-none focus:border-earth-accent appearance-none cursor-pointer transition-all duration-300"
                    >
                      <option>10:00 AM – 12:00 PM</option>
                      <option>1:00 PM – 3:00 PM</option>
                      <option>6:00 PM – 8:00 PM</option>
                      <option>8:00 PM – 10:00 PM</option>
                    </select>
                    <Clock
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-earth-card group-hover:text-earth-accent transition-colors pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-earth-accent mb-2">
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
                      errors.guests ? "border-red-400" : "border-earth-card"
                    } rounded-lg px-4 py-3 text-[#f4f1ea] focus:outline-none focus:border-earth-accent transition-all duration-300`}
                  />
                  <Users
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 -translate-x-5 text-earth-card group-hover:text-earth-accent transition-colors pointer-events-none"
                    size={18}
                  />
                </div>
                <div className="flex justify-between items-start mt-2 px-1">
                  <p className="text-earth-soft text-xs">
                    Maximum table capacity is 8 guests
                  </p>
                  {formData.guests > 8 && (
                    <p className="text-earth-accent text-xs font-semibold animate-pulse">
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
                <label className="block text-sm font-medium text-earth-accent mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="requests"
                  rows="3"
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder="Any special arrangements or notes? (Cake, décor, seating preference)"
                  className="w-full bg-earth-dark/30 border border-earth-card rounded-lg px-4 py-3 text-[#f4f1ea] placeholder-earth-card focus:outline-none focus:border-earth-accent resize-none transition-all duration-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={
                    !formData.name || !formData.email || !formData.phone
                  }
                  className="w-full bg-[#ffffff] text-earth-dark font-bold text-lg py-4 rounded-full hover:bg-earth-soft transition-all duration-300 transform hover:scale-[1.01] shadow-xl hover:shadow-earth-accent/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      <Link
        to="/"
        className="text-[#648978] hover:underline"
      >
        Back to Home
      </Link>
      </div>
    </div>
  );
};

export default Reservation;
