import React from 'react';
import { motion } from 'framer-motion';

const ShopCard = ({ shop, onOrder }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl overflow-hidden hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300"
        >
            <div className="h-48 bg-gray-700 relative overflow-hidden group">
                {/* Placeholder for shop image - using a colored gradient if image fails */}
                <img
                    src={shop.image || `https://source.unsplash.com/random/400x300/?food,restaurant,${shop.id}`}
                    alt={shop.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x300?text=Shop+Image';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                    <h3 className="text-xl font-bold text-white">{shop.name}</h3>
                    <p className="text-sm text-gray-300 flex items-center gap-1">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {shop.owner} • {shop.location}
                    </p>
                </div>
            </div>

            <div className="p-4 space-y-4">
                <div className="space-y-2">
                    {shop.meals.map((meal, index) => (
                        <div key={index} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0">
                            <span className="text-gray-200">{meal.name}</span>
                            <span className="font-bold text-accent">₹{meal.price}</span>
                        </div>
                    ))}
                </div>

                <button
                    onClick={onOrder}
                    className="w-full py-2 bg-white/10 hover:bg-primary text-white font-semibold rounded-lg transition-colors border border-white/10 hover:border-primary"
                >
                    Confirm Order
                </button>
            </div>
        </motion.div>
    );
};

export default ShopCard;
