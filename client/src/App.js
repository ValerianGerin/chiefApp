import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Navbar, Footer, Homepage } from "./components";
import {
  PolicyOfUseOfData,
  TermsOfServices,
  LegalNotice,
} from "./components/footer/footer-pages";
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
          <>
            <main>
              <Route exact path="/" component={Homepage}></Route>
              <Route
                path="/policy of use of personal data"
                component={PolicyOfUseOfData}
              ></Route>
              <Route path="/legal notice" component={LegalNotice}></Route>
              <Route
                path="/terms of service"
                component={TermsOfServices}
              ></Route>
            </main>
          </>
        </Switch>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
