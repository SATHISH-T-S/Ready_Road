import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import shopsData from '../data/shops.json';

const MealSelectionPage = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Extract unique meal distinct times from data
        const uniqueCategories = [...new Set(shopsData.map(shop => shop.available))];
        // Ensure standard order if possible: Morning, Afternoon, Night
        const order = ['Morning', 'Afternoon', 'Night'];
        uniqueCategories.sort((a, b) => {
            return order.indexOf(a) - order.indexOf(b);
        });
        setCategories(uniqueCategories);
    }, []);

    const handleSelect = (meal) => {
        localStorage.setItem('selectedMeal', meal);
        navigate('/app');
    };

    return (
        <div className="min-h-screen bg-[#121212] nav-blur text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">

            {/* Background Blob */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-10 text-center w-full max-w-4xl"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">
                    What's your mood?
                </h1>
                <p className="text-gray-400 text-lg mb-12">Select a meal time to see what's cooking near you.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleSelect(category)}
                            className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl cursor-pointer hover:border-primary/50 hover:bg-[#222] transition-all shadow-xl group"
                        >
                            <div className="text-6xl mb-6 transition-transform group-hover:scale-110 duration-300">
                                {category === 'Morning' && '☕'}
                                {category === 'Afternoon' && '🍛'}
                                {category === 'Night' && '🥘'}
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                {category}
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                View shops available for {category.toLowerCase()}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default MealSelectionPage;
