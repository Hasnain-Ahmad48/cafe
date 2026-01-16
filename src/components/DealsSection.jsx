import React from 'react';
import { Link } from 'react-router-dom';
import { dealsData } from '../data/dealsData';
import { ArrowRight } from 'lucide-react';

const DealsSection = () => {
    return (
        <section className="py-20 bg-earth-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#ffffff] mb-4 font-serif">Exclusive Deals</h2>
                    <p className="text-[#3a4d45] text-lg max-w-2xl mx-auto">
                        Discover our limited-time offers and special bundles designed to delight.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dealsData.categories.map((deal) => (
                        <div
                            key={deal.id}
                            className="group relative overflow-hidden rounded-2xl bg-earth-card hover:bg-earth-card-alt transition-colors duration-500 shadow-xl shadow-black/20"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={deal.image}
                                    alt={deal.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-[#f4f1ea] mb-6 font-serif">
                                    {deal.title}

                                </h3>

                                <Link
                                    to={`/deals/${deal.id}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-earth-accent text-earth-dark font-bold text-sm uppercase rounded-full tracking-widest hover:bg-earth-dark hover:text-white transition-all duration-300 transform group-hover:-translate-y-1"
                                >
                                    Explore
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DealsSection;
