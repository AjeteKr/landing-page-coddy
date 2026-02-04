import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    if (onLogout) onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <button
            onClick={() => navigate('/')}
            className="brand-button"
          >
            Coddy
          </button>
        </div>

        <div className="navbar-menu">
          <button onClick={() => navigate('/')} className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            {t('home')}
          </button>
          <button onClick={() => navigate('/courses')} className={`nav-link ${isActive('/courses') ? 'active' : ''}`}>
            {t('courses')}
          </button>
        </div>

        <div className="navbar-right">
          <LanguageSwitcher />
          {user ? (
            <>
              <span className="user-info">{user.name}</span>
              <button onClick={handleLogout} className="btn-logout">
                {t('logout')}
              </button>
            </>
          ) : !isAuthPage ? (
            <>
              <button onClick={() => navigate('/login')} className="btn-login">
                {t('login')}
              </button>
              <button onClick={() => navigate('/register')} className="btn-register">
                {t('register')}
              </button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
