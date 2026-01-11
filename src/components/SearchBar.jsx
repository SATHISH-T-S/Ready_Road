import React from 'react';

const SearchBar = () => {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/10 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                placeholder="Search for idly, dosa, or shops..."
            />
        </div>
    );
};

export default SearchBar;
