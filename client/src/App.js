import React, { useState } from "react";
import { Navbar, Footer, Homepage } from "./components";
import { Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./index.scss";

const App = () => {
  const [loggedStatus, setLoggedStatus] = useState({
    isLogged: false,
    token: null,
    user: null,
  });

  const login = () => {
    const token = localStorage.getItem("authorization");
    //const user = JSON.parse(window.atob(token.split(".")[1]));
    setLoggedStatus({ isLogged: true, token: token });
  };

  const logout = () => {
    localStorage.removeItem("authorization");
    setLoggedStatus({ isLogged: false, token: null });
  };

  return (
    <>
      <AuthProvider value={{ loggedStatus, login, logout }}>
        <Navbar />
        <Switch>
          <main>
            <Route to="/" component={Homepage}></Route>
          </main>
        </Switch>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
