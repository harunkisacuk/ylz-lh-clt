/** @format */

import React from "react";
import Buttons from '../Buttons'
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Navbar.Brand as={Link} to='/'>
            Invoice App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Buttons />
        </Navbar>
    );
  }


export default Header;
