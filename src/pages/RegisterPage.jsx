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
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Registered:', formData);
            navigate('/app');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark p-4 relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-40"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card w-full max-w-md p-8 rounded-2xl shadow-2xl z-10"
            >
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Account 🚀</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                            placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
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
                        <label className="block text-gray-300 text-sm font-medium mb-1">Password</label>
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

                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/10 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                            placeholder="••••••••"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 mt-2 bg-gradient-to-r from-secondary to-primary text-white font-bold rounded-lg shadow-lg hover:shadow-secondary/40 transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Already have an account? <Link to="/login" className="text-primary hover:underline font-medium">Log In</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default RegisterPage;
