import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // LocalStorage Logic
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const user = storedUsers.find(u => u.email === formData.email && u.password === formData.password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            navigate('/app');
        } else {
            setErrors({ email: 'Invalid credentials' });
        }
    };

    return (
        <div className="center" style={{ minHeight: '100vh', padding: '20px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{ width: '100%', maxWidth: '400px' }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Welcome Back! 👋</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="input-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="user@example.com"
                        />
                        {errors.email && <p style={{ color: '#ff4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.email}</p>}
                    </div>

                    <div className="input-group">
                        <label className="input-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="••••••••"
                        />
                        {errors.password && <p style={{ color: '#ff4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.password}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                        Login
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#888' }}>
                    Don't have an account? <Link to="/register" style={{ color: 'var(--primary)' }}>Sign Up</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;
