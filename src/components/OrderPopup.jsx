import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OrderPopup = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl z-10 max-w-sm w-full text-center relative overflow-hidden"
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Order Confirmed!</h3>
                        <p className="text-gray-500 dark:text-gray-300 mb-6">Your food is being prepared and will be on its way shortly.</p>

                        <button
                            onClick={onClose}
                            className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors"
                        >
                            Awesome!
                        </button>

                        {/* Confetti effect decoration */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default OrderPopup;
