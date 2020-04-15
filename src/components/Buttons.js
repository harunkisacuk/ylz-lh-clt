import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"

export default withAuth(class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication();
  }

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }

  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

login = async () =>{
    // Redirect to '/' after login
    this.props.auth.login('/');
  }

  logout = async () => {
    // Redirect to '/' after logout
    this.props.auth.logout('/');
  }
  render() {
      console.log(this.props.auth)
    return <Navbar.Collapse id="responsive-navbar-nav">
                {this.state.authenticated && (
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/admin">
                        Admin
                    </Nav.Link>
                    <Nav.Link as={Link} to="/staff">
                        Staff
                    </Nav.Link>
                    <Nav.Link onClick={this.logout}>
                        Logout
                    </Nav.Link>
                </Nav>)}
                {!this.state.authenticated &&<Nav><Nav.Link onClick={this.login}>Login</Nav.Link></Nav> }
          </Navbar.Collapse>

  }
});