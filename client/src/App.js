import React from "react";
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

import "./index.scss";

const App = () => {
  return (
    <>
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
            <Route path="/terms of service" component={TermsOfServices}></Route>
            <Route
              path="/register"
              render={(props) => <Register {...props} />}
            ></Route>
            <Route
              path="/login"
              render={(props) => <Login {...props} />}
            ></Route>
            {/* <Route
              path="/profil"
              render={(props) => <UserProfil {...props} {...userInfos} />}
            ></Route> */}
          </main>
        </>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
