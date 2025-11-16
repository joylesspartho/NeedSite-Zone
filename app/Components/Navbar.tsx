'use client';

import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppNavbar() {
  return (
    <Navbar className='bg-secondary-subtle shadow' expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/">
          NeedSite <span className="text-success">Zone</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/Service">
              Service
            </Nav.Link>
            <Nav.Link as={Link} href="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
