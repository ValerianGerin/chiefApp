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
  UserProfil,
} from "./components";

import { AuthProvider } from "./context/AuthContext";

import "./index.scss";

const App = () => {
  const [loggedStatus, setLoggedStatus] = useState({
    isLogged: false,
    token: null,
  });

  const [userInfos, setUserInfos] = useState();

  const login = (token) => {
    localStorage.setItem("authorization", token);
    setLoggedStatus({
      isLogged: true,
      token: token,
    });
  };

  const logout = () => {
    localStorage.removeItem("authorization");
    setLoggedStatus({ isLogged: false, token: null, userId: null });
  };

  const getUserInfos = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const jsonResponse = await response.json();
      setUserInfos(jsonResponse);
    } catch (error) {
      throw error;
    }
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
                render={(props) => (
                  <Register
                    {...props}
                    login={login}
                    getUserInfos={getUserInfos}
                  />
                )}
              ></Route>
              <Route
                path="/login"
                render={(props) => (
                  <Login {...props} login={login} getUserInfos={getUserInfos} />
                )}
              ></Route>
              <Route
                path="/profil"
                render={(props) => <UserProfil {...props} {...userInfos} />}
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
