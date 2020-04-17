/** @format */

import React from "react";
import Navbar from "./molecules/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
import config from "./config/config";
import { Container } from "react-bootstrap";
import "./App.css";
import routes from "./routes";

const App = () => (
  <Router>
    <Security {...config}>
      <Navbar />
      <Container style={{ margin: "7em" }}>
        <Route path="/implicit/callback" component={ImplicitCallback} />
            {routes}
      </Container>
    </Security>
  </Router>
);

export default App;
