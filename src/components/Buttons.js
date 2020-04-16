/** @format */

import React, { useState, useEffect } from "react";
import { withAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Button = withAuth(({ auth }) => {
  const [authenticated, setAuthenticated] = useState(null);
  const [groups, setGroups] = useState("Manager");
  const [name, setName] = useState("");

  useEffect(() => {
    auth.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated !== authenticated) {
        setAuthenticated(isAuthenticated);

        let myIdToken = JSON.parse(localStorage.getItem("okta-token-storage"));
        if (myIdToken.idToken) {
          setGroups(myIdToken.idToken.claims.groups[1]);
          setName(myIdToken.idToken.claims.name);
        }
      }
    });
  });
  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      {authenticated && (
        <>
          <Nav className="mr-auto">
            {groups === "Admin" ? (
              <>
                <Nav.Link as={Link} to="/users">
                  Users
                </Nav.Link>
                <Nav.Link as={Link} to="/refdata">
                  Ref Data
                </Nav.Link>
                <Nav.Link as={Link} to="/logs">
                  Logs
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/customers">
                  Customers
                </Nav.Link>
                <Nav.Link as={Link} to="/receipts">
                  Receipts
                </Nav.Link>
                <Nav.Link as={Link} to="/reports">
                  Reports
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <NavDropdown title={"Signed in: " + name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => auth.logout()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      )}
      {!authenticated && (
        <Nav>
          <Nav.Link onClick={() => auth.login()}>Login</Nav.Link>
        </Nav>
      )}
    </Navbar.Collapse>
  );
});
export default Button;
