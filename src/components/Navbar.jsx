import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, onSearch }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    return (
        <nav className="glass-panel">
            <div className="container navbar-content">

                <Link to="/app" className="logo">
                    <div className="logo-icon">R</div>
                    <span className="hidden sm:inline">READY ROAD</span>
                </Link>

                <div className="flex items-center gap-3 md:gap-4">
                    {/* Change Meal Button - Visible on larger screens or as icon on mobile */}
                    <button
                        onClick={() => navigate('/meal-selection')}
                        className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-primary/20 hover:bg-primary/30 text-primary rounded-full text-xs font-bold border border-primary/20 transition-colors"
                        title="Change Meal Time"
                    >
                        <span>↺</span>
                        <span className="hidden lg:inline">Change Meal</span>
                    </button>

                    <div className="hidden md:flex flex-col text-right">
                        {user && <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{user.name}</span>}
                    </div>

                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary bg-gray-700">
                        <img src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=random`} alt="Profile" className="w-full h-full object-cover" />
                    </div>

                    <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-white ml-2">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
