import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderSuccessPage = () => {
    const navigate = useNavigate();

    // Optional: Redirect back to home after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/app');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="center" style={{ minHeight: '100vh', padding: '20px', flexDirection: 'column', textAlign: 'center' }}>
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card"
                style={{ maxWidth: '500px', width: '100%', padding: '40px' }}
            >
                <div style={{
                    width: '80px', height: '80px', margin: '0 auto 20px',
                    background: 'rgba(76, 175, 80, 0.2)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <svg style={{ width: '40px', height: '40px', color: '#4CAF50' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Order Confirmed! 🎉</h2>
                <p style={{ color: '#aaa', marginBottom: '30px', lineHeight: '1.6' }}>
                    Your food is being prepared with love.<br />
                    It will be delivered to your location shortly.
                </p>

                <Link to="/app">
                    <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Back to Home
                    </button>
                </Link>

                <p style={{ marginTop: '15px', fontSize: '0.8rem', color: '#666' }}>
                    Redirecting automatically in 5s...
                </p>
            </motion.div>
        </div>
    );
};

export default OrderSuccessPage;
