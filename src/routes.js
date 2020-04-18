/** @format */

import React, { useState, useEffect } from "react";
import { Switch } from "react-router-dom";
import { SecureRoute, withAuth } from "@okta/okta-react";
import AdminHome from "./pages/admin/Home";
import ManagerHome from "./pages/manager/Home";
import Customers from "./pages/manager/Customers.js";
import Receipts from "./pages/manager/Receipts.js";
import Reports from "./pages/manager/Reports";
import Users from "./pages/admin/Users";
import RefData from "./pages/admin/RefData";
import Logs from "./pages/admin/Logs";
import NotFoundPage from "./pages/NotFoundPage";

const routes = withAuth(({ auth }) => {
  const [groups, setGroups] = useState([]);
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    auth.isAuthenticated().then(isAuthenticated => {
      if (isAuthenticated !== authenticated) {
        setAuthenticated(isAuthenticated);

        let myIdToken = JSON.parse(localStorage.getItem("okta-token-storage"));
        if (myIdToken.idToken) {
          setGroups(myIdToken.idToken.claims.groups);
        }
      }
    });
  });

  if (groups.includes("Manager") && groups.includes("Admin")) {
    return (
      <Switch>
        <SecureRoute path="/" exact={true} component={ManagerHome} />
        <SecureRoute path="/manager/customers" component={Customers} />
        <SecureRoute path="/manager/receipts" component={Receipts} />
        <SecureRoute path="/manager/reports" component={Reports} />
        <SecureRoute path="/admin/users" component={Users} />
        <SecureRoute path="/admin/refdata" component={RefData} />
        <SecureRoute path="/admin/logs" component={Logs} />
        <SecureRoute component={NotFoundPage} />
      </Switch>
    );
  } else if (groups.includes("Manager")) {
    return (
      <Switch>
        <SecureRoute path="/" exact={true} component={ManagerHome} />
        <SecureRoute path="/manager/customers" component={Customers} />
        <SecureRoute path="/manager/receipts" component={Receipts} />
        <SecureRoute path="/manager/reports" component={Reports} />
        <SecureRoute component={NotFoundPage} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <SecureRoute path="/" component={AdminHome} />
        <SecureRoute path="/admin/users" component={Users} />
        <SecureRoute path="/admin/refdata" component={RefData} />
        <SecureRoute path="/admin/logs" component={Logs} />
        <SecureRoute component={NotFoundPage} />
      </Switch>
    );
  }
});

export default routes();
