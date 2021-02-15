import React from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={{...props.value}}>
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, AuthContext };
