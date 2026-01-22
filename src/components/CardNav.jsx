import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const CardNav = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);
    const cardsRef = useRef([]);
    const tlRef = useRef(null);

    // Café Data Links
    const items = [
        {
            //   label: "",
            bgColor: "#ffffff",
            textColor: "#05110d",
            links: [
                {
                    label: "Home",
                    href: "/",
                },
                {
                    label: "About Us",
                    href: "/about"
                }
            ],
        },

        {
            label: "Menu",
            bgColor: "#05110d", // earth-dark
            textColor: "#f4f1ea", // earth-light
            links: [
                { label: "Fast Food", href: "/menu/fast-food" },
                { label: "Desi Tarka", href: "/menu/desi-tarka" },
                { label: "Dessert", href: "/menu/dessert" },
            ],
        },
        {
            label: "Deals",
            bgColor: "#354b44", // earth-hover (mineral-green)
            textColor: "#f4f1ea", // earth-light
            links: [
                { label: "Hot Deals", href: "/deals/hot-deals" },
                { label: "Family Deals", href: "/deals/family-deals" },
                { label: "Café Specials", href: "/deals/cafe-specials" },
            ],
        },
        {
            label: "Contact",
            bgColor: "#617c73", // earth-card (viridian-green)
            textColor: "#05110d", // earth-dark
            links: [
                { label: "Reservation", href: "/reservation" },
                { label: "WhatsApp", href: "https://wa.me/" }, // Placeholder
                { label: "Contact Us", href: "/contact" }, // Assuming contact page exists or similar
            ],
        },
    ];

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 60; // Default collapsed height

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) {
            const contentEl = navEl.querySelector(".card-nav-content");
            if (contentEl) {
                // Clone element to measure true height if hidden
                const clone = contentEl.cloneNode(true);
                clone.style.visibility = "hidden";
                clone.style.position = "absolute";
                clone.style.height = "auto";
                clone.style.width = contentEl.style.width || "100%";
                document.body.appendChild(clone);
                const contentHeight = clone.scrollHeight;
                document.body.removeChild(clone);

                const topBar = 60;
                const padding = 16;
                return topBar + contentHeight + padding;
            }
        }
        return 60; // Fallback
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        // Reset initial states
        gsap.set(navEl, { height: 60, overflow: "hidden" });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease: "power3.out",
        });

        tl.to(
            cardsRef.current,
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
                stagger: 0.08,
            },
            "-=0.2",
        );

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, []);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.to(navRef.current, {
                    height: newHeight,
                    duration: 0.3,
                    ease: "power3.out",
                });
            } else {
                // Re-create timeline for new potential heights
                tlRef.current.kill();
                tlRef.current = createTimeline();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.invalidate().play();
        } else {
            setIsHamburgerOpen(false);
            tl.reverse().then(() => setIsExpanded(false));
        }
    };

    const closeMenu = () => {
        if (isExpanded) {
            setIsHamburgerOpen(false);
            tlRef.current?.reverse().then(() => setIsExpanded(false));
        }
    };

    const setCardRef = i => el => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        // Show only on mobile (md:hidden)
        <div className="absolute top-4 left-0 w-full z-50 md:hidden px-4 pointer-events-none">
            {/* Container needs pointer-events-none so it doesn't block clicks when closed, 
           but children need pointer-events-auto */}
            <nav
                ref={navRef}
                className={`card-nav w-full bg-white shadow-xl rounded-2xl overflow-hidden pointer-events-auto mx-auto max-w-sm`}
                style={{ height: "60px" }}
            >
                {/* Top Bar */}
                <div className="flex items-center justify-between h-[60px] px-6 relative z-20 bg-earth-soft">
                    {/* Logo area - Keep it minimal or empty since we have the main logo behind */}
                    <div className="font-bold text-xl text-earth-light tracking-wider">
                        <Link to="/">
                            CAFÉ<span className="text-earth-accent">.</span>
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group flex flex-col items-center justify-center cursor-pointer gap-[6px] w-8 h-8`}
                        onClick={toggleMenu}
                    >
                        <span
                            className={`w-full h-[2px] bg-earth-dark transition-all duration-300 ${isHamburgerOpen ? "rotate-45 translate-y-[8px]" : ""}`}
                        ></span>
                        <span
                            className={`w-full h-[2px] bg-earth-hover transition-all duration-300 ${isHamburgerOpen ? "opacity-0" : ""}`}
                        ></span>
                        <span
                            className={`w-full h-[2px] bg-earth-light transition-all duration-300 ${isHamburgerOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
                        ></span>
                    </div>
                </div>

                {/* Content */}
                <div
                    className={`card-nav-content px-4 pb-4 flex flex-col gap-2 ${isExpanded ? "visible" : "invisible"
                        }`}
                >
                    {items.map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className="flex flex-col gap-3 p-4 rounded-xl min-h-[90px]"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="text-xl font-medium tracking-tight opacity-50">
                                {item.label}
                            </div>
                            <div className="mt-auto flex flex-col gap-2">
                                {item.links.map((lnk, i) =>
                                    // Using react-router Link for internal nav
                                    lnk.href.startsWith("http") ? (
                                        <a
                                            key={`${lnk.label}-${i}`}
                                            href={lnk.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity"
                                            onClick={closeMenu}
                                        >
                                            <GoArrowUpRight className="text-xl" />
                                            {lnk.label}
                                        </a>
                                    ) : (
                                        <Link
                                            key={`${lnk.label}-${i}`}
                                            to={lnk.href}
                                            className="flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity"
                                            onClick={closeMenu}
                                        >
                                            <GoArrowUpRight className="text-xl" />
                                            {lnk.label}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
