import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-earth-dark text-earth-light pt-24 overflow-x-hidden flex flex-col">
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* 1. Page Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-earth-light mb-4">
                        Contact Us
                    </h1>
                    <p className="text-earth-soft text-lg max-w-2xl mx-auto font-sans">
                        We’d love to hear from you — visit us, call us, or connect online
                    </p>
                </div>

                {/* 2. Contact Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in-up delay-100">

                    {/* Phone Card */}
                    <a
                        href="tel:+1234567890"
                        className="group bg-earth-hover p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block text-center"
                    >
                        <div className="w-16 h-16 bg-earth-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-earth-accent transition-colors duration-300">
                            <Phone className="w-8 h-8 text-earth-accent group-hover:text-earth-dark transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Call Us</h3>
                        <p className="text-earth-light/80 group-hover:text-white transition-colors">
                            +92 348-4674394
                        </p>
                        <p className="text-earth-soft text-sm mt-2">Tap to call</p>
                    </a>

                    {/* Location Card */}
                    <a
                        href="https://www.google.com/maps/@34.135544,72.026321,1219m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-earth-hover p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block text-center"
                    >
                        <div className="w-16 h-16 bg-earth-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-earth-accent transition-colors duration-300">
                            <MapPin className="w-8 h-8 text-earth-accent group-hover:text-earth-dark transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                        <p className="text-earth-light/80 group-hover:text-white transition-colors">
                            The Coffee Shop,<br />Mardan
                        </p>
                        <p className="text-earth-soft text-sm mt-2">Open Maps</p>
                    </a>

                    {/* Hours Card */}
                    <div className="bg-earth-hover p-8 rounded-2xl shadow-lg transition-all duration-300 text-center hover:shadow-2xl  hover:-translate-y-1 cursor-default">
                        <div className="w-16 h-16  bg-earth-dark rounded-full flex items-center justify-center mx-auto mb-6">
                            <Clock className="w-8 h-8 text-earth-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                        <p className="text-earth-light/80">
                            8:00 AM – 10:00 PM
                        </p>
                        <p className="text-earth-soft text-sm mt-2">Open all days of the week</p>
                    </div>

                </div>

                {/* 3. Social Media Section */}
                <div className="text-center mb-24 animate-fade-in-up delay-200">
                    <h2 className="text-2xl font-bold text-earth-light mb-8">Follow Us</h2>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-earth-hover p-4 rounded-full text-earth-light hover:bg-earth-accent hover:text-earth-dark transition-all duration-300 transform hover:scale-110"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-earth-hover p-4 rounded-full text-earth-light hover:bg-earth-accent hover:text-earth-dark transition-all duration-300 transform hover:scale-110"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-earth-hover p-4 rounded-full text-earth-light hover:bg-earth-accent hover:text-earth-dark transition-all duration-300 transform hover:scale-110"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="text-earth-soft mt-6 text-sm">
                        Follow us for updates, offers & café moments
                    </p>
                </div>

            </div>

            {/* 4. Footer Area */}
            <footer className="mt-auto border-t border-earth-hover py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-earth-soft text-sm">
                        © 2026 The Coffee Club. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
