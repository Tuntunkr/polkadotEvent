import React from "react";
import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";
import "../Header/Navbar.css";
import Logo from "../../assets/Images/logo.svg";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-4 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="menu" as={NavLink}  to="/">Home</Nav.Link>
              <NavDropdown
                title="Event"
                id="navbarScrollingDropdown"
                className="headers"
              >
                <NavDropdown.Item as={NavLink}  to='/' className="headers">
                  All events
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink}  to='/meetup' className="headers">
                  Meet Up
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink}  to='/hackathon' className="headers">
                  Hackathon
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/AddConference" className="headers">
                  Conference
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink}  to='/webniars' className="headers">
                  Webinars
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item as={NavLink}  to='/ama' className="headers">
                  AMA
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/blog" className="menu">Blog</Nav.Link>
              <Nav.Link as={NavLink} to="/contactus" className="menu">Contact Us</Nav.Link>
            </Nav>
            <Nav.Link as={NavLink} className="navCta" to="/SignUp">
              Sign Up
            </Nav.Link>
            <Nav.Link as={NavLink} className="navCtas" to="/SignIn">
              Sign In
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
