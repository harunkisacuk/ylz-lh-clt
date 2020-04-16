/** @format */

import React, { useState, useEffect } from "react";
import { Switch } from "react-router-dom";
import { SecureRoute, withAuth } from "@okta/okta-react";
import AdminHome from "./components/pages/admin/AdminHome";
import ManagerHome from "./components/pages/manager/ManagerHome";
import Staff from "./components/pages/Staff";
import Customers from "./components/pages/manager/Customers.js";
import Receipts from "./components/pages/manager/Receipts.js";
import Reports from "./components/pages/manager/Reports";
import Users from "./components/pages/admin/Users";
import RefData from "./components/pages/admin/RefData";
import Logs from "./components/pages/admin/Logs";
import NotFoundPage from "./components/pages/NotFoundPage";

const routes = withAuth(({ auth }) => {
  const [groups, setGroups] = useState("Manager");
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    auth.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated !== authenticated) {
        setAuthenticated(isAuthenticated);

        let myIdToken = JSON.parse(localStorage.getItem("okta-token-storage"));
        if (myIdToken.idToken) {
          setGroups(myIdToken.idToken.claims.groups[1]);
        }
      }
    });
  });

  if (groups === "Manager") {
    return (
      <Switch>
        <SecureRoute path="/" exact={true} component={ManagerHome} />
        <SecureRoute path="/customers" component={Customers} />
        <SecureRoute path="/receipts" component={Receipts} />
        <SecureRoute path="/reports" component={Reports} />
        <SecureRoute path="/staff" component={Staff} />
        <SecureRoute component={NotFoundPage} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <SecureRoute path="/" exact={true} component={AdminHome} />
        <SecureRoute path="/users" component={Users} />
        <SecureRoute path="/refdata" component={RefData} />
        <SecureRoute path="/logs" component={Logs} />
        <SecureRoute component={NotFoundPage} />
      </Switch>
    );
  }
});

export default routes();
