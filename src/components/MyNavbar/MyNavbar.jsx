import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Steve Corbin - Realtor&trade;</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/current-listings">Current Listings</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
};

export default MyNavbar;
