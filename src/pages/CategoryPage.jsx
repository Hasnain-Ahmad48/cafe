import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { menuData } from '../data/menuData';

const CategoryPage = () => {
    const { categoryId } = useParams();
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
                <Link to="/" className="text-earth-accent hover:underline">Return Home</Link>
            </div>
        );
    }

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
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">{category.title}</h1>
                    <p className="text-lg text-earth-accent/90 max-w-xl font-light">{category.description}</p>
                </div>

                <Link
                    to="/"
                    className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-earth-accent transition-colors duration-300"
                >
                    <div className="p-2 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50">
                        <ArrowLeft size={24} />
                    </div>
                    <span className="sr-only md:not-sr-only text-sm font-bold uppercase tracking-wider">Back to Home</span>
                </Link>
            </div>

            {/* Menu Items List */}
            <div className="max-w-4xl mx-auto py-16 px-6">
                <div className="bg-earth-card/10 rounded-3xl p-8 md:p-12 border border-earth-soft/20 backdrop-blur-sm">
                    <ul className="space-y-8">
                        {category.items.map((item, index) => (
                            <li key={index} className="flex flex-col md:flex-row md:items-center justify-between group border-b border-earth-soft/20 pb-6 last:border-0 last:pb-0">
                                <div className="mb-2 md:mb-0">
                                    <h3 className="text-xl font-bold text-white group-hover:text-earth-accent transition-colors">
                                        {item.name}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4">
                                    {/* Dotted Leader for desktop */}
                                    <div className="hidden md:block flex-grow border-b-2 border-dotted border-earth-soft/30 w-32 xl:w-64 opacity-50"></div>

                                    <span className="text-xl font-bold text-earth-accent">
                                        {item.price}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Navigation */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-earth-soft hover:text-white transition-colors duration-300 font-medium uppercase tracking-widest text-sm"
                    >
                        View Other Categories
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
