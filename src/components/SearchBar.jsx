import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                className="block w-full px-4 py-2 border border-white/10 rounded-full leading-5 bg-white/10 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:ring-1 focus:ring-primary focus:border-primary text-sm transition-all"
                placeholder="Search for shops, dishes, or locations..."
            />
        </div>
    );
};

export default SearchBar;
