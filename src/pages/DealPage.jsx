import React, {useEffect, useState} from "react";
import {useParams, Link, Navigate, useNavigate} from "react-router-dom";
import {ArrowLeft} from "lucide-react";
import {dealsData} from "../data/dealsData";

const DealPage = () => {
  const {dealId} = useParams();
  const navigate = useNavigate();
  const dealCategory = dealsData.categories.find(c => c.id === dealId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dealId]);

  if (!dealCategory) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#519251] text-[#05110d]">
        <h2 className="text-3xl font-bold mb-4">Deal Not Found</h2>
        <Link
          to="/"
          className="text-[#648978] hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  //order
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (isOrderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOrderOpen]);

  const [orderData, setOrderData] = useState({
    name: "",
    address: "",
    mobile: "",
    quantity: 1,
    payment: "COD",
  });

  return (
    <div className="min-h-screen bg-earth-dark">
      {/* Hero Header */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={dealCategory.image}
          alt={dealCategory.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f4f1ea] font-serif mb-4">
            {dealCategory.title}
          </h1>
        </div>

        {/* Back to Home (Deals Section) */}
        <Link
          to="/#deals-section"
          className="absolute top-20 left-8 flex items-center gap-2 text-white/80 hover:text-earth-accent transition-colors duration-300"
        >
          <div className="p-2 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50">
            <ArrowLeft size={24} />
          </div>
          <span className="sr-only md:not-sr-only text-sm font-bold uppercase tracking-wider">
            Back to Home
          </span>
        </Link>
      </div>

      {/* Deals List */}
      <div className="container mx-auto px-4 pb-20 mt-16">
        <div className="max-w-4xl mx-auto bg-earth-card/10 rounded-2xl shadow-xl overflow-hidden border border-[#dcebd6]">
          <div className="bg-[#648978] p-8 text-center text-[#f4f1ea]">
            <p className="text-lg italic">{dealCategory.description}</p>
          </div>

          <div className="divide-y divide-[#dcebd6]">
            {dealCategory.items.map((item, index) => (
              <div
                key={index}
                className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white font-medium">
                    Includes:{" "}
                    <span className="text-white">{item.includes}</span>
                  </p>
                </div>

                <div className="text-right w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
                  <span className="text-3xl font-bold text-earth-accent md:mb-2">
                    {item.price}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setIsOrderOpen(true);
                    }}
                    className="bg-earth-dark text-[#f4f1ea] px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#648978] transition-colors"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* footer navigation */}
        <div className="mt-5 text-center">
          <button
            onClick={() => navigate("/#deals-section")}
            className="text-earth-soft hover:text-white transition-colors duration-300 font-medium uppercase tracking-widest text-sm"
          >
            View other deals
          </button>
        </div>
      </div>
      {isOrderOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOrderOpen(false)}
        >
          <div
            className="bg-earth-dark w-[90%] max-w-lg rounded-2xl p-6 border border-earth-soft/30 relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOrderOpen(false)}
              className="absolute top-4 right-4 text-earth-soft hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">
              Order {selectedItem?.name}
            </h2>
            <p className="text-earth-accent mb-6">
              Price: {selectedItem?.price}
            </p>

            <form
              onSubmit={e => {
                e.preventDefault();
                console.log({
                  item: selectedItem,
                  ...orderData,
                });
                alert("Order placed successfully!");
                setIsOrderOpen(false);
              }}
              className="space-y-4"
            >
              {/* Name */}
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-earth-card/10 text-white placeholder-earth-soft outline-none border border-earth-soft/30 focus:border-earth-accent"
                onChange={e =>
                  setOrderData({...orderData, name: e.target.value})
                }
              />

              {/* Address */}
              <textarea
                required
                placeholder="Delivery Address"
                className="w-full px-4 py-3 rounded-lg bg-earth-card/10 text-white placeholder-earth-soft outline-none border border-earth-soft/30 focus:border-earth-accent"
                onChange={e =>
                  setOrderData({...orderData, address: e.target.value})
                }
              />

              {/* Mobile */}
              <input
                type="tel"
                required
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-lg bg-earth-card/10 text-white placeholder-earth-soft outline-none border border-earth-soft/30 focus:border-earth-accent"
                onChange={e =>
                  setOrderData({...orderData, mobile: e.target.value})
                }
              />

              {/* Quantity */}
              <input
                type="number"
                min="1"
                value={orderData.quantity}
                className="w-full px-4 py-3 rounded-lg bg-earth-card/10 text-white outline-none border border-earth-soft/30 focus:border-earth-accent"
                onChange={e =>
                  setOrderData({...orderData, quantity: e.target.value})
                }
              />

              {/* Payment */}
              <div className="text-earth-soft text-sm">Payment Method</div>
              <div className="px-4 py-3 rounded-lg bg-earth-card/10 text-white border border-earth-soft/30">
                Cash on Delivery
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={() => {
                  const phoneNumber = "923484674394"; // ✅ cafe WhatsApp number (with country code)
                  if (
                    !orderData.name ||
                    !orderData.mobile ||
                    !orderData.address
                  ) {
                    alert("Please fill all required fields");
                    return;
                  }

                  const message = `
                  🛒  *New Cafe Order*

                  🍽️ Item: ${selectedItem?.name}
                  📦 Quantity: ${orderData.quantity}

                  👤 Name: ${orderData.name}
                  📞 Mobile: ${orderData.mobile}
                  🏠 Address: ${orderData.address}

                  💰 Payment: Cash on Delivery
                  ️🕒 Order Time: ${new Date().toLocaleString()}
                  `.trim();

                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message,
                  )}`;

                  window.open(whatsappUrl, "_blank");
                }}
                className="w-full bg-earth-accent text-earth-dark py-3 rounded-full font-semibold hover:bg-white transition-colors"
              >
                Confirm Order on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealPage;
