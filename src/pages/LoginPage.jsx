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
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Simulate login
            console.log('Logged in:', formData);
            navigate('/app');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark p-4 relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card w-full max-w-md p-8 rounded-2xl shadow-2xl z-10"
            >
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back! 👋</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                            placeholder="user@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/10 border ${errors.password ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Don't have an account? <Link to="/register" className="text-primary hover:underline font-medium">Sign Up</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;
