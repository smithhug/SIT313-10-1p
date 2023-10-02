import { createContext, useContext, useState } from 'react';

const authstate = createContext();

export const AuthConfirm = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    console.log("We are logged in");
  };

  const logout = () => {
    setUser(null);
    console.log("We are logged out");
  };

  return (
    <authstate.Provider value={{ user, login, logout }}>
      {children}
    </authstate.Provider>
  );
};

export const useAuth = () => useContext(authstate);
