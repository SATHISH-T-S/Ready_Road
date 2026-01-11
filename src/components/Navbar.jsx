import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ user }) => {
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
                    <span>Roadside Eats</span>
                </Link>

                {/* Hide SearchBar on small screens if needed, or style it to fit */}
                <div style={{ flex: 1, margin: '0 2rem', maxWidth: '500px' }}>
                    <SearchBar />
                </div>

                <div className="flex items-center gap-4">
                    <div style={{ textAlign: 'right', display: 'none', flexDirection: 'column', md: { display: 'flex' } }}>
                        {user && <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{user.name}</span>}
                    </div>

                    <div className="logo-icon" style={{ borderRadius: '50%', backgroundColor: '#555', overflow: 'hidden', border: '2px solid var(--primary)' }}>
                        <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Profile" style={{ width: '100%', height: '100%' }} />
                    </div>

                    <button onClick={handleLogout} style={{ fontSize: '0.8rem', color: '#aaa', marginLeft: '10px' }}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
