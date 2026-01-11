import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MealSelector from '../components/MealSelector';
import ShopCard from '../components/ShopCard';
import OrderPopup from '../components/OrderPopup';

const MOCK_SHOPS = [
    {
        id: 1,
        name: "Annapoorna Mess",
        owner: "Ramesh Kumar",
        location: "MK Road, near Bus Stand",
        image: null,
        meals: [
            { name: "Idly (2pcs)", price: 30 },
            { name: "Pongal", price: 45 },
            { name: "Vada", price: 10 }
        ],
        available: "Morning"
    },
    {
        id: 2,
        name: "Chettinad Spicy Hut",
        owner: "Suresh",
        location: "Opposite Tech Park",
        image: null,
        meals: [
            { name: "Chicken Biryani", price: 120 },
            { name: "Parotta (2pcs)", price: 40 },
            { name: "Chicken 65", price: 100 }
        ],
        available: "Afternoon"
    },
    {
        id: 3,
        name: "Night Owls Tiffin",
        owner: "Lakshmi",
        location: "Main Bazaar",
        image: null,
        meals: [
            { name: "Dosa", price: 35 },
            { name: "Chapati", price: 40 },
            { name: "Egg Dosa", price: 55 }
        ],
        available: "Night"
    },
    {
        id: 4,
        name: "Sri Sai Bhavan",
        owner: "Ganesh",
        location: "Railway Station Rd",
        image: null,
        meals: [
            { name: "Filter Coffee", price: 15 },
            { name: "Poori Masala", price: 50 }
        ],
        available: "Morning"
    },
    {
        id: 5,
        name: "Amma Unavagam",
        owner: "Govt",
        location: "City Center",
        image: null,
        meals: [
            { name: "Sambar Rice", price: 20 },
            { name: "Curd Rice", price: 15 }
        ],
        available: "Afternoon"
    }
];

const MainPage = () => {
    const [selectedMeal, setSelectedMeal] = useState('Morning');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Filter shops based on selected meal time (mock logic - simply filtering by 'available' property)
    const filteredShops = MOCK_SHOPS.filter(shop => shop.available === selectedMeal);

    const handleOrder = () => {
        setIsPopupOpen(true);
        // Auto close after 3 seconds
        setTimeout(() => setIsPopupOpen(false), 3000);
    };

    return (
        <div className="min-h-screen bg-dark pb-20">
            <Navbar />

            <div className="pt-20 px-4 max-w-7xl mx-auto">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-white mb-2">Order Fresh Food 🍛</h1>
                    <p className="text-gray-400">Find the best local tastes near you.</p>
                </header>

                <MealSelector selectedMeal={selectedMeal} onSelectMeal={setSelectedMeal} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {filteredShops.length > 0 ? (
                        filteredShops.map((shop) => (
                            <ShopCard key={shop.id} shop={shop} onOrder={handleOrder} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            <p>No shops available for this time. Try another meal type!</p>
                        </div>
                    )}
                </div>
            </div>

            <OrderPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
    );
};

export default MainPage;
