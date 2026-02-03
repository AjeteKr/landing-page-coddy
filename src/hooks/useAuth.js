import { useState, useCallback } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  });

  const login = useCallback((userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const getToken = useCallback(() => {
    return localStorage.getItem('token');
  }, []);

  return {
    user,
    login,
    logout,
    getToken,
    isAuthenticated: !!user
  };
};

export default useAuth;
