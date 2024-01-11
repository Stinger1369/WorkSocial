import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export function AuthProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true',
  );
  const [username, setUsername] = useState(
    localStorage.getItem('username') || '',
  );

  useEffect(() => {
    // Met à jour le localStorage quand isLoggedIn ou username change
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
    localStorage.setItem('username', username);
  }, [isLoggedIn, username]);

  const login = firstName => {
    setIsLoggedIn(true);
    setUsername(firstName);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };
  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
      username,
    }),
    [isLoggedIn, login, logout, username],
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useAuth = () => useContext(AuthContext);
