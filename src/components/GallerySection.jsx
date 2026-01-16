import React from "react";
import {galleryData} from "../data/galleryData";

const GallerySection = () => {
  return (
    <section className="bg-earth-dark py-20 px-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#f4f1ea] mb-4">
          Our Café Moments
        </h2>
        <p className="text-earth-soft text-lg">
          A glimpse of the flavors, warmth, and atmosphere we serve daily
        </p>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryData.galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl bg-earth-hover shadow-lg group break-inside-avoid"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-earth-hover/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="p-4 text-[#f4f1ea] text-sm font-medium tracking-wide">
                {img.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
