import React from 'react';
import { Link } from 'react-router-dom';
import LandingAnimation from '../components/LandingAnimation';
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white p-4 relative overflow-hidden">

            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

            <div className="max-w-4xl w-full z-10 space-y-8">
                <LandingAnimation />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="flex flex-col items-center gap-4 mt-8"
                >
                    <Link to="/login">
                        <button className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                            <span className="relative z-10 flex items-center gap-2 text-lg">
                                Get Started 😋
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </button>
                    </Link>

                    <p className="text-sm text-gray-500">
                        Already have an account? <Link to="/login" className="text-primary hover:underline">Log In</Link>
                    </p>
                </motion.div>
            </div>

            {/* Footer Info */}
            <div className="absolute bottom-4 text-center text-gray-600 text-xs">
                © 2026 Roadside Eats. Fast & Fresh.
            </div>
        </div>
    );
};

export default LandingPage;
