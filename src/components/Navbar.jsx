import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import CardNav from './CardNav';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const toggleDropdown = (name) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const menuItems = [
        { name: 'Fast Food', path: '/menu/fast-food' },
        { name: 'Desi Tarka', path: '/menu/desi-tarka' },
        { name: 'Dessert', path: '/menu/dessert' },
    ];

    const dealItems = [
        { name: 'Hot Deals', path: '/deals/hot-deals' },
        { name: 'Family Deals', path: '/deals/family-deals' },
        { name: 'Café Specials', path: '/deals/cafe-specials' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-earth-dark shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        {/* Text logo for now, can be replaced with Image */}
                        <span className="text-earth-light text-2xl font-bold tracking-wider">
                            CAFÉ<span className="text-earth-accent">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-earth-light hover:text-earth-accent font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Menu Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center text-earth-light hover:text-earth-accent font-medium transition-colors duration-200">
                                Menu <ChevronDown className="ml-1 w-4 h-4" />
                            </button>
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-earth-hover ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                                <div className="py-1">
                                    {menuItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className="block px-4 py-2 text-sm text-earth-light hover:bg-earth-card hover:text-white"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Deals Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center text-earth-light hover:text-earth-accent font-medium transition-colors duration-200">
                                Deals <ChevronDown className="ml-1 w-4 h-4" />
                            </button>
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-earth-hover ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                                <div className="py-1">
                                    {dealItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className="block px-4 py-2 text-sm text-earth-light hover:bg-earth-card hover:text-white"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Reservation CTA */}
                        <Link
                            to="/reservation"
                            className="bg-earth-accent text-earth-dark px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-earth-dark transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                        >
                            Reservation
                        </Link>
                    </div>

                </div>

                {/* Mobile Navigation (CardNav) */}
                <CardNav />
            </div>



        </nav >
    );
};

export default Navbar;
