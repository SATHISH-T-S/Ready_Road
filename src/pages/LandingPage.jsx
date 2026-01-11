import React from 'react';
import { Link } from 'react-router-dom';
import LandingAnimation from '../components/LandingAnimation';
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <div className="landing-hero">

            {/* Background element */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                opacity: 0.1,
                pointerEvents: 'none'
            }}></div>

            <div style={{ zIndex: 10, maxWidth: '800px', width: '100%', padding: '20px' }}>
                <LandingAnimation />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                >
                    <Link to="/login">
                        <button className="btn btn-primary">
                            <span>Get Started 😋</span>
                        </button>
                    </Link>

                    <p style={{ color: '#888', fontSize: '0.9rem' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Log In</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default LandingPage;
