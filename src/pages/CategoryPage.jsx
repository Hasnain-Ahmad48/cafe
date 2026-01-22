import React, {useEffect, useState} from "react";

import {useParams, Link, useNavigate} from "react-router-dom";
import {ArrowLeft} from "lucide-react";
import {menuData} from "../data/menuData";

const CategoryPage = () => {
  const {categoryId} = useParams();
  const navigate = useNavigate();

  const category = menuData.categories.find(c => c.id === categoryId);

  useEffect(() => {
    // Scroll to top when entering the page
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen bg-earth-dark flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Category Not Found</h2>
        <Link
          to="/"
          className="text-earth-accent hover:underline"
        >
          Return Home
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
      {/* Header Image */}
      <div className="h-[40vh] relative overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
            {category.title}
          </h1>
          <p className="text-lg text-earth-accent/90 max-w-xl font-light">
            {category.description}
          </p>
        </div>

        <Link
          to="/#menu-section"
          className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-earth-accent transition-colors duration-300"
        >
          <div className="p-2 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50">
            <ArrowLeft size={24} />
          </div>
          <span className="sr-only md:not-sr-only text-sm font-bold uppercase tracking-wider">
            Back to Home
          </span>
        </Link>
      </div>

      {/* Menu Items List */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-earth-card/10 rounded-3xl p-8 md:p-12 border border-earth-soft/20 backdrop-blur-sm">
          <ul className="space-y-8">
            {category.items.map((item, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between group border-b border-earth-soft/20 pb-6 last:border-0 last:pb-0"
              >
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl font-bold text-white group-hover:text-earth-accent transition-colors">
                    {item.name}
                  </h3>
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
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/#menu-section")}
            className="text-earth-soft hover:text-white transition-colors duration-300 font-medium uppercase tracking-widest text-sm"
          >
            View Other Categories
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
                  -------------------------
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

export default CategoryPage;
