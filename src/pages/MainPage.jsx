import React, { useState, useEffect } from 'react';
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
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) setCurrentUser(user);
        // Potentially redirect to login if no user
    }, []);

    const filteredShops = MOCK_SHOPS.filter(shop => shop.available === selectedMeal);

    const handleOrder = (shop) => {
        // Save order to local storage
        const newOrder = {
            id: Date.now(),
            shopName: shop.name,
            items: shop.meals, // Simplified: ordering all items for now
            date: new Date().toISOString(),
            user: currentUser ? currentUser.email : 'Guest'
        };

        const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        localStorage.setItem('orders', JSON.stringify([...storedOrders, newOrder]));

        setIsPopupOpen(true);
        setTimeout(() => setIsPopupOpen(false), 3000);
    };

    return (
        <div style={{ paddingBottom: '80px' }}>
            <Navbar user={currentUser} />

            <div className="container" style={{ paddingTop: '20px' }}>
                <header className="mb-4" style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h1 className="landing-title" style={{ fontSize: '2rem' }}>Order Fresh Food 🍛</h1>
                    <p style={{ color: '#888' }}>Find the best local tastes near you.</p>
                </header>

                <MealSelector selectedMeal={selectedMeal} onSelectMeal={setSelectedMeal} />

                <div className="shop-grid">
                    {filteredShops.length > 0 ? (
                        filteredShops.map((shop) => (
                            <ShopCard key={shop.id} shop={shop} onOrder={() => handleOrder(shop)} />
                        ))
                    ) : (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#666' }}>
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
