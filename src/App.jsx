import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import OrderSuccessPage from './pages/OrderSuccessPage';

import ShopDetailsPage from './pages/ShopDetailsPage';
import MealSelectionPage from './pages/MealSelectionPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/meal-selection" element={<MealSelectionPage />} />
        <Route path="/app" element={<MainPage />} />
        <Route path="/shop/:id" element={<ShopDetailsPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
