import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import logoSC from "../../images/SteveCorbin.png";
import WEbutton from "../../images/WEbutton.png";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Link className="navbar-brand" to="/">
          <img src={logoSC} alt="logo" className="navbar-logo" />
        </Link>
        <a
          className="navbar-brand mr-auto"
          href="https://watersedgere.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={WEbutton} alt="logo" className="navbar-logo-we" />
        </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger"/>
      <Navbar.Collapse id="basic-navbar-nav" className="text-right">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/search">
            Search
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/current-listings">
            Current Listings
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
