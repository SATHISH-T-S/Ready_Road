import React from 'react';
import { motion } from 'framer-motion';

const foodItems = [
    { id: 1, text: '🥘', label: 'Biryani', x: -100, y: 100, delay: 0 },
    { id: 2, text: '🥞', label: 'Dosa', x: 100, y: -50, delay: 0.5 },
    { id: 3, text: '🍡', label: 'Idly', x: -50, y: -100, delay: 1 },
    { id: 4, text: '🍗', label: 'Chicken', x: 80, y: 80, delay: 1.5 },
    { id: 5, text: '🥟', label: 'Vada', x: -80, y: 20, delay: 2 },
];

const LandingAnimation = () => {
    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
            {/* Central glow */}
            <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />

            {foodItems.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: item.x * 2, // Fly outwards
                        y: item.y * 2,
                        rotate: 360
                    }}
                    transition={{
                        duration: 1.5,
                        delay: item.delay,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1
                    }}
                    className="absolute text-6xl drop-shadow-lg cursor-pointer hover:scale-125 transition-transform"
                    title={item.label}
                >
                    {item.text}
                </motion.div>
            ))}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="z-10 text-center"
            >
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    Tasty Roadside Eats
                </h2>
                <p className="text-gray-300 text-lg">Authentic Local Flavors at Your Fingertips</p>
            </motion.div>
        </div>
    );
};

export default LandingAnimation;
