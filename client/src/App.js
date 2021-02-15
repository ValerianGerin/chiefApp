import React from "react";
import { Navbar, Footer } from "./components";
import { Switch, Route } from "react-router-dom";
import "./index.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route to="/"></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
