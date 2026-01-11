import React from 'react';
import { motion } from 'framer-motion';

const ShopCard = ({ shop, onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-300"
            onClick={onClick}
        >
            {/* Full Height Image Overlay */}
            <div className="relative h-64 sm:h-72 w-full">
                <img
                    src={shop.image || `https://source.unsplash.com/random/400x300/?food,restaurant,${shop.id}`}
                    alt={shop.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x300?text=Shop+Image';
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Text Content positioned at bottom */}
                <div className="absolute bottom-0 left-0 w-full p-5 text-left">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{shop.name}</h3>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        {shop.owner}
                    </p>
                </div>

                {/* "View Menu" Hint */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Menu ↗
                </div>
            </div>
        </motion.div>
    );
};

export default ShopCard;
