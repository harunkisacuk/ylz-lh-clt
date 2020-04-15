/** @format */

import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import config from "./config/config";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Security {...config}>
          <Navbar />
          <Container style={{ margin: "7em" }}>
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/staff" exact={true} component={Staff} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </Container>
        </Security>
      </Router>
    </div>
  );
};

export default App;
