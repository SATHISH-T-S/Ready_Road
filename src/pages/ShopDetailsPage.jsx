import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import shopsData from '../data/shops.json';

const ShopDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [shop, setShop] = useState(null);

    useEffect(() => {
        const foundShop = shopsData.find(s => s.id === parseInt(id));
        if (foundShop) {
            setShop(foundShop);
        } else {
            navigate('/app'); // Redirect if shop not found
        }
    }, [id, navigate]);

    const handleOrder = () => {
        if (!shop) return;

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const newOrder = {
            id: Date.now(),
            shopName: shop.name,
            items: shop.meals,
            date: new Date().toISOString(),
            user: currentUser ? currentUser.email : 'Guest'
        };

        const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        localStorage.setItem('orders', JSON.stringify([...storedOrders, newOrder]));

        navigate('/order-success');
    };

    if (!shop) return <div className="p-10 text-center text-white">Loading...</div>;

    return (
        <div className="fixed inset-0 w-full h-full bg-black">
            {/* Full Screen Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm opacity-50"
                style={{ backgroundImage: `url(${shop.image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Centered Content Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6"
            >
                {/* The "Dialog" Card */}
                <div className="w-full max-w-lg bg-[#1a1a1a]/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh]">

                    {/* Header Image inside Card */}
                    <div className="relative h-48 shrink-0">
                        <img
                            src={shop.image}
                            alt={shop.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-transparent to-transparent" />

                        <div className="absolute bottom-4 left-6">
                            <h1 className="text-2xl font-bold text-white drop-shadow-md">{shop.name}</h1>
                            <p className="text-white/80 text-sm flex gap-2 items-center mt-1">
                                <span>{shop.owner}</span> • <span>{shop.location}</span>
                            </p>
                        </div>
                    </div>

                    {/* Scrollable Menu List */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-semibold text-primary">Menu Items</h2>
                            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/20">
                                {shop.available}
                            </span>
                        </div>

                        <div className="space-y-3">
                            {shop.meals.map((meal, index) => (
                                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                    <span className="font-medium text-gray-200">{meal.name}</span>
                                    <span className="font-bold text-primary">₹{meal.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Bar (Pinned to bottom of Card) */}
                    <div className="p-6 pt-4 border-t border-white/10 bg-[#1a1a1a]">
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/app')}
                                className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/10 transition-all active:scale-95"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleOrder}
                                className="flex-[2] py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform active:scale-95"
                            >
                                Confirm Order
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ShopDetailsPage;
