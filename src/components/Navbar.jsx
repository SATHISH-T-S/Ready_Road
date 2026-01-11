import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 glass-panel backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <Link to="/app" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
                            R
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
                            Roadside Eats
                        </span>
                    </Link>

                    <div className="flex-1 max-w-lg mx-8 hidden md:block">
                        <SearchBar />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-300 hover:text-white transition-colors relative">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                        </button>

                        <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden border-2 border-primary/50 cursor-pointer">
                            <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
