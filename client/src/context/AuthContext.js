import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const initialState = { isLogged: false, token: null, user: null };

  const [loggedStatus, setLoggedStatus] = useState(initialState);

  const login = (token) => {
    localStorage.setItem("authorization", token);
    setLoggedStatus({ ...loggedStatus, isLogged: true, token: token });
  };

  const logout = () => {
    localStorage.removeItem("authorization");
    setLoggedStatus({ isLogged: false, token: null, userId: null });
  };

  //Optional to fetch user by id (contained in jwt)
  const getUserInfos = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const jsonResponse = await response.json();
      setLoggedStatus({ ...loggedStatus, user: jsonResponse });
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ loggedStatus, login, logout, getUserInfos }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
