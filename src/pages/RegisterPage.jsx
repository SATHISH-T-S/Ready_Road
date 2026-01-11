import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
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
        const newUser = { id: Date.now(), name: formData.name, email: formData.email, password: formData.password };

        localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        navigate('/app');
    };

    return (
        <div className="center" style={{ minHeight: '100vh', padding: '20px' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card"
                style={{ width: '100%', maxWidth: '400px' }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Create Account 🚀</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="input-label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                        />
                        {errors.name && <p style={{ color: '#ff4444', fontSize: '0.8rem' }}>{errors.name}</p>}
                    </div>

                    <div className="input-group">
                        <label className="input-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-field"
                        />
                        {errors.email && <p style={{ color: '#ff4444', fontSize: '0.8rem' }}>{errors.email}</p>}
                    </div>

                    <div className="input-group">
                        <label className="input-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="input-field"
                        />
                        {errors.password && <p style={{ color: '#ff4444', fontSize: '0.8rem' }}>{errors.password}</p>}
                    </div>

                    <div className="input-group">
                        <label className="input-label">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="input-field"
                        />
                        {errors.confirmPassword && <p style={{ color: '#ff4444', fontSize: '0.8rem' }}>{errors.confirmPassword}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                        Sign Up
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#888' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--primary)' }}>Log In</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default RegisterPage;
