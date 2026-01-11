import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ShopCard from '../components/ShopCard';
import SearchBar from '../components/SearchBar';

import shopsData from '../data/shops.json';

const MOCK_SHOPS = shopsData;

const MainPage = () => {
    const navigate = useNavigate();

    // Extract unique meal distinct times from data
    const mealCategories = [...new Set(MOCK_SHOPS.map(shop => shop.available))];
    // Sort logic can be added if needed, e.g. Morning -> Afternoon -> Night

    // Determine default meal based on stored selection
    const getStoredMeal = () => {
        return localStorage.getItem('selectedMeal');
    };

    const [selectedMeal, setSelectedMeal] = useState(getStoredMeal());
    const [currentUser, setCurrentUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) setCurrentUser(user);

        // Redirect if no meal selected
        if (!selectedMeal) {
            navigate('/meal-selection');
        }
    }, [selectedMeal, navigate]);

    // FILTER: Only show shops for the selected meal time that match the search query
    const filteredShops = MOCK_SHOPS.filter(shop => {
        if (!selectedMeal) return false;

        // First filter by time
        const timeMatch = shop.available === selectedMeal;

        // Then optionally filter by search query
        if (!searchQuery) return timeMatch;

        const queryMatch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            shop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            shop.meals.some(meal => meal.name.toLowerCase().includes(searchQuery.toLowerCase()));

        return timeMatch && queryMatch;
    });

    const handleOrder = (shop) => {
        // setSelectedShop(null); // Close modal - This line was commented out or removed in the original context, keeping it as is.

        const newOrder = {
            id: Date.now(),
            shopName: shop.name,
            items: shop.meals,
            date: new Date().toISOString(),
            user: currentUser ? currentUser.email : 'Guest'
        };

        const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        localStorage.setItem('orders', JSON.stringify([...storedOrders, newOrder]));

        // Navigate to the success page
        navigate('/order-success');
    };

    return (
        <div style={{ paddingBottom: '80px' }}>
            <Navbar user={currentUser} />

            <div className="container" style={{ paddingTop: '20px' }}>
                <header className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-8 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div className="text-center md:text-left w-full">
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold text-white mb-1">
                                {selectedMeal} Cravings 😋
                            </h1>
                            <p className="text-gray-400 text-sm">Best spots open for {selectedMeal}</p>
                        </div>

                        <div className="w-full max-w-md">
                            <SearchBar onSearch={setSearchQuery} />
                        </div>
                    </div>
                </header>

                <div className="shop-grid">
                    {!selectedMeal ? (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#aaa' }}>
                            <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Redirecting to selection...</p>
                        </div>
                    ) : filteredShops.length > 0 ? (
                        filteredShops.map((shop) => (
                            <ShopCard
                                key={shop.id}
                                shop={shop}
                                onClick={() => navigate(`/shop/${shop.id}`)}
                            />
                        ))
                    ) : (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#666' }}>
                            <p>No shops matching "{searchQuery}" found in {selectedMeal} menu.</p>
                            <p className="text-sm mt-2">Try switching meal times or searching for something else.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
