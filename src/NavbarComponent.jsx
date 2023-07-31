import React from "react";
import { Link } from "react-router-dom";

//react-bootstrap Navbar:
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

function NavbarComponent() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar-dark">
            <Navbar.Brand href="#" className="navLink">Yusuf's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Yusuf's Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >

                <Nav className="container-fluid" variant="underline" defaultActiveKey="/" >
                  <Nav.Item className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="ms-auto">
                    <Nav.Link eventKey="/Projects" as={Link} to="/Projects">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="ms-auto">
                    <Nav.Link eventKey="Contact" as={Link} to="/Contact">Contact</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="ms-auto">
                    <Nav.Link eventKey="/ProfessionalExperience" as={Link} to="/ProfessionalExperience">Professional Experience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="ms-auto">
                    <Nav.Link eventKey="Qualifications" as={Link} to="/Qualifications">Qualifications</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="ms-auto">
                    <NavDropdown title="e-Learning Resources">
                      <NavDropdown.Item eventKey="/ELearningResources" as={Link} to="/ELearningResources">HTML / CSS</NavDropdown.Item>
                      <NavDropdown.Item eventKey="/ELearningResources" as={Link} to="/ELearningResources">JavaScript</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="/ELearningResources" as={Link} to="/ELearningResources">React</NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Item>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent; 