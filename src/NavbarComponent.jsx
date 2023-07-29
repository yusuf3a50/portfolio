import React from "react";
//import { BrowserRouter, Route, Link } from "react-router-dom";

//react-bootstrap Navbar:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
  return (
    <>
      {['sm'].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Navbar.Brand href="#">Yusuf's Portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    <Nav.Link href="/ProfessionalExperience">Professional Experience</Nav.Link>
                    <Nav.Link href="/Qualifications">Qualifications</Nav.Link>

                    <NavDropdown
                      title="e-Learning Resources"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/ELearningResources">HTML / CSS</NavDropdown.Item>
                      <NavDropdown.Item href="/ELearningResources">
                        JavaScript
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/ELearningResources">
                        React
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent; 