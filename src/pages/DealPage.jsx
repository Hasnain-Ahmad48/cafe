import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dealsData } from '../data/dealsData';

const DealPage = () => {
    const { dealId } = useParams();
    const dealCategory = dealsData.categories.find(c => c.id === dealId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [dealId]);

    if (!dealCategory) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f1ea] text-[#05110d]">
                <h2 className="text-3xl font-bold mb-4">Deal Not Found</h2>
                <Link to="/" className="text-[#648978] hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f4f1ea]">
            {/* Hero Header */}
            <div className="relative h-[40vh] bg-[#14251f]">
                <img
                    src={dealCategory.image}
                    alt={dealCategory.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#f4f1ea] font-serif shadow-sm">
                        {dealCategory.title}
                    </h1>
                </div>
            </div>

            {/* Breadcrumb / Back */}
            <div className="container mx-auto px-4 py-6">
                <Link to="/#deal-section" className="text-[#648978] font-semibold hover:text-[#3a4d45] flex items-center gap-2">
                    &larr; Back to Home
                </Link>
            </div>

            {/* Deals List */}
            <div className="container mx-auto px-4 pb-20 ">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-[#dcebd6]">
                    <div className="bg-[#648978] p-8 text-center text-[#f4f1ea]">
                        <p className="text-lg italic">{dealCategory.description}</p>
                    </div>

                    <div className="divide-y divide-[#dcebd6]">
                        {dealCategory.items.map((item, index) => (
                            <div key={index} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#f9fcf8] transition-colors">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold text-[#14251f] mb-2">{item.name}</h3>
                                    <p className="text-[#617c73] font-medium">Includes: <span className="text-[#3a4d45]">{item.includes}</span></p>
                                </div>
                                <div className="text-right w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
                                    <span className="text-3xl font-bold text-[#a7ddb8] md:mb-2 drop-shadow-sm" style={{ color: '#568b6b' }}>{item.price}</span>
                                    <button className="bg-[#14251f] text-[#f4f1ea] px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#648978] transition-colors">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealPage;
