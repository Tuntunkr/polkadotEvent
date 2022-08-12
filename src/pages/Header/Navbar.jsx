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
          <Navbar.Brand as={NavLink} to="/">
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
                <Nav.Link as={NavLink}  to='/events' className="headers">
                  All events
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink}  to='/meetup' className="headers">
                  Meet Up
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink}  to='/hackathon' className="headers">
                  Hackathon
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink} to="/addConference" className="headers">
                  Conference
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={NavLink}  to='/webniars' className="headers">
                  Webinars
                </Nav.Link>
                <NavDropdown.Divider />

                <Nav.Link as={NavLink}  to='/ama' className="headers">
                  AMA
                </Nav.Link>
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
