import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true); // Auto-play by default
    const [isMuted, setIsMuted] = useState(true); // Muted by default for auto-play

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Ensure video plays on mount
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Auto-play was prevented:", error);
                setIsPlaying(false);
            });
        }
    }, []);

    return (
        <div id='home' className="relative w-full h-screen overflow-hidden bg-earth-dark">
            {/* Background Video */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                loop
                muted={isMuted} // Muted required for auto-play policy
                playsInline
                // Using a reliable placeholder video if local file isn't present yet, user can replace this source
                src="video.mp4"
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Video Overlay Gradient (Subtle dark overlay) */}
            <div className="absolute inset-0 bg-gradient-to-t from-earth-overlay/90 via-earth-overlay/40 to-transparent pointer-events-none"></div>

            {/* Custom Controls */}
            <div className="absolute top-8 right-8 flex gap-4 z-20">
                <button
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-earth-dark/50 backdrop-blur-sm text-earth-accent hover:bg-earth-dark/80 transition-colors duration-300 border border-earth-accent/20"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button
                    onClick={toggleMute}
                    className="p-3 rounded-full bg-earth-dark/50 backdrop-blur-sm text-earth-accent hover:bg-earth-dark/80 transition-colors duration-300 border border-earth-accent/20"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
            </div>

            {/* Bottom Center Content */}
            <div className="absolute bottom-16 left-0 w-full z-10 flex flex-col items-center text-center px-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    The Coffee Shop
                </h1>
                <p className="max-w-xl text-lg md:text-xl text-earth-accent mb-8 font-light leading-relaxed">
                    &ldquo;Enjoy fresh, baked daily with locally sourced ingredients.&rdquo;
                </p>

                <div className="flex gap-4">
                    <Link to="/#menu-section" className="px-8 py-3 bg-earth-accent text-earth-dark font-semibold text-lg rounded-full cursor-pointer hover:bg-earth-dark hover:text-white transition-all duration-300 shadow-lg shadow-earth-accent/10 border-2 border-transparent hover:border-earth-accent/20">
                        View Menu
                    </Link>
                    <Link to="/reservation" className="px-8 py-3 bg-transparent text-white font-semibold text-lg rounded-full cursor-pointer hover:bg-earth-accent hover:text-earth-dark transition-all duration-300 border-2 border-earth-accent backdrop-blur-sm">
                        Reservation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
