import React, { useState, useEffect } from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [authContext, setAuthContext] = useState();

  useEffect(() => {
    const token = localStorage.getItem("authorization");
    if(token){
      setAuthContext(token)
    }
  }, [authContext]);

  return (
    <AuthContext.Provider value={{ ...authContext }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const RoomConsumer = AuthContext.Consumer;

export { AuthProvider, RoomConsumer, AuthContext };
