import React from 'react';
import { ArrowRight } from 'lucide-react';

const MenuCategoryCard = ({ category, onClick }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-earth-card hover:bg-earth-card-alt transition-colors duration-500 shadow-xl shadow-black/20">
            {/* Image Container with Overlay */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider font-serif">
                    {category.title}
                </h3>

                <button
                    onClick={() => onClick(category.id)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-earth-accent text-earth-dark font-bold text-sm uppercase rounded-full tracking-widest hover:bg-white transition-all duration-300 transform group-hover:-translate-y-1"
                >
                    Explore
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default MenuCategoryCard;
