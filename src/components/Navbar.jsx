import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
        { name: 'About Us', path: '/#about' }, // Assuming anchor for now
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

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-earth-light hover:text-earth-accent p-2 rounded-md focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-earth-dark overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pt-2 pb-6 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="block px-3 py-3 text-base font-medium text-earth-light hover:text-earth-accent border-b border-earth-hover"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Menu Dropdown */}
                    <div>
                        <button
                            onClick={() => toggleDropdown('menu')}
                            className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-earth-light hover:text-earth-accent border-b border-earth-hover"
                        >
                            Menu <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === 'menu' ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`${activeDropdown === 'menu' ? 'block' : 'hidden'} bg-earth-hover`}>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block pl-8 pr-3 py-2 text-sm text-earth-light hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Deals Dropdown */}
                    <div>
                        <button
                            onClick={() => toggleDropdown('deals')}
                            className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-earth-light hover:text-earth-accent border-b border-earth-hover"
                        >
                            Deals <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === 'deals' ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`${activeDropdown === 'deals' ? 'block' : 'hidden'} bg-earth-hover`}>
                            {dealItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block pl-8 pr-3 py-2 text-sm text-earth-light hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        to="/reservation"
                        className="block w-full text-center mt-4 bg-earth-accent text-earth-dark px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors"
                    >
                        Reservation
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
