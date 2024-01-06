import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    // Met à jour le localStorage quand isLoggedIn ou username change
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
    localStorage.setItem('username', username);
  }, [isLoggedIn, username]);

  const login = (firstName) => {
    setIsLoggedIn(true);
    setUsername(firstName);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
