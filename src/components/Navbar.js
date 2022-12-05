import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav_bar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar border-bottom rounded-bottom"
    >
      <Navbar.Brand className="brand" href="#home">
        The Street's Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="text-nav" href="/about">
            Home
          </Nav.Link>
          <NavDropdown
            title={<span className="text-nav">Paul G. Lacalle</span>}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Git Projects</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Photography</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Food Recipes</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span className="text-nav">George R. La Calle</span>}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Git Projects</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="text-nav" href="/features">
            Contact
          </Nav.Link>
          <NavDropdown
            title={<span className="text-nav">Language</span>}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Spanish</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav_bar;
