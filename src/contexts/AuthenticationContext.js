// AuthenticationContext.js
import React, { createContext, useState, useContext } from 'react';
console.log('here');
const AuthenticationContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  accessToken: null,
  setAccessToken: () => {},
});

export const AuthenticationProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  const value = { isLoggedIn, setIsLoggedIn, accessToken, setAccessToken };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error('useAuthentication must be used within AuthenticationProvider');
  }
  return context;
};
