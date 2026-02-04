import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import './i18n';

import Login from './components/Login';
import Register from './components/Register';
import PublicLanding from './components/PublicLanding';
import PublicCourses from './components/PublicCourses';
import CourseDetail from './components/CourseDetail';
import StudentProjects from './components/StudentProjects';

function App() {
  const { t } = useTranslation('common');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session on mount
    const restoreSession = async () => {
      try {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        if (token && userData) {
          // Verify token validity
          const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
          const response = await fetch(`${API_URL}/api/auth/verify-token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });

          if (response.ok) {
            setUser(JSON.parse(userData));
          } else {
            // Token is invalid
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
        }
      } catch (error) {
        console.error('Error restoring session:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    navigate('/');
  };


  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>{t('loading')}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PublicLanding />} />
          <Route path="/courses" element={<PublicCourses />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/student-projects" element={<StudentProjects />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register onRegisterSuccess={handleLoginSuccess} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
