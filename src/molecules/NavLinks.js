/** @format */

import React, { useState, useEffect } from 'react';
import { withAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Button = withAuth(({ auth }) => {
  const [authenticated, setAuthenticated] = useState(null);
  const [groups, setGroups] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    auth.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated !== authenticated) {
        setAuthenticated(isAuthenticated);

        let myIdToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        if (myIdToken.idToken) {
          setGroups(myIdToken.idToken.claims.groups);
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
            {groups.includes('Admin') && (
              <>
                <Nav.Link as={Link} to="/admin/users">
                  Users
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/refdata">
                  Ref Data
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/logs">
                  Logs
                </Nav.Link>
              </>
            )}
            {groups.includes('Manager') && (
              <>
                <Nav.Link as={Link} to="/manager/customers">
                  Customers
                </Nav.Link>
                <Nav.Link as={Link} to="/manager/receipts">
                  Receipts
                </Nav.Link>
                <Nav.Link as={Link} to="/manager/reports">
                  Reports
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <NavDropdown title={'Signed in: ' + name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => auth.logout()}>Logout</NavDropdown.Item>
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
