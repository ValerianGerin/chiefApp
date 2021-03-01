import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import {
  Navbar,
  Footer,
  Homepage,
  PolicyOfUseOfData,
  TermsOfServices,
  LegalNotice,
  Register,
  Login,
  AddRecipe,
} from "./components";

import { AuthProvider } from "./context/AuthContext";

import "./index.scss";

const App = () => {
  const [loggedStatus, setLoggedStatus] = useState({
    isLogged: false,
    token: null,
    userId: null,
  });

  console.log(loggedStatus.userId)

  const login = (token) => {
    localStorage.setItem("authorization", token);
    const userIdFromToken = JSON.parse(window.atob(token.split(".")[1])).payload;
    setLoggedStatus({
      ...loggedStatus,
      isLogged: true,
      token: token,
      userId: userIdFromToken,
    });
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
              <Route
                path="/register"
                render={(props) => <Register {...props} login={login} />}
              ></Route>
              <Route
                path="/login"
                render={(props) => <Login {...props} login={login} />}
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
