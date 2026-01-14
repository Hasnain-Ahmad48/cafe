import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCategoryCard from './MenuCategoryCard';
import { menuData } from '../data/menuData';

const MenuSection = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (categoryId) => {
        navigate(`/menu/${categoryId}`);
    };

    return (
        <section className="relative py-20 px-6 bg-earth-dark">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-earth-accent text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
                        Discover Our Flavors
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                        Our Menu Categories
                    </h2>
                    <div className="w-20 h-1 bg-earth-accent mx-auto rounded-full"></div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {menuData.categories.map((category) => (
                        <MenuCategoryCard
                            key={category.id}
                            category={category}
                            onClick={handleCategoryClick}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
