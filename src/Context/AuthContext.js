import React, { createContext, useState, useEffect } from 'react';
debugger;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData, token, refreshToken) => {
    setUser(userData);
    setToken(token);
    setRefreshToken(refreshToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  };



  return (
    <AuthContext.Provider value={{ user, token, refreshToken, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
