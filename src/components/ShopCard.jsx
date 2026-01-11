import React from 'react';
import { motion } from 'framer-motion';

const ShopCard = ({ shop, onOrder }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="shop-card"
        >
            <div style={{ position: 'relative', height: '200px', backgroundColor: '#333' }}>
                <img
                    src={shop.image || `https://source.unsplash.com/random/400x300/?food,restaurant,${shop.id}`}
                    alt={shop.name}
                    className="shop-image"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x300?text=Shop+Image';
                    }}
                />
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                }}></div>
                <div style={{ position: 'absolute', bottom: '12px', left: '16px' }}>
                    <h3 className="shop-title">{shop.name}</h3>
                    <p className="shop-meta">
                        {shop.owner} • {shop.location}
                    </p>
                </div>
            </div>

            <div className="shop-details">
                <div style={{ marginBottom: '16px' }}>
                    {shop.meals.map((meal, index) => (
                        <div key={index} className="menu-item">
                            <span>{meal.name}</span>
                            <span className="price">₹{meal.price}</span>
                        </div>
                    ))}
                </div>

                <button
                    onClick={onOrder}
                    className="btn"
                    style={{ width: '100%', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    Confirm Order
                </button>
            </div>
        </motion.div>
    );
};

export default ShopCard;
