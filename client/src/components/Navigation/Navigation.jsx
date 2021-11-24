import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
   return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
         <Container>
            <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
               <Nav className='me-auto'>
                  <Nav.Link href='#features'>Features</Nav.Link>
                  <Nav.Link href='#pricing'>Pricing</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Navigation;
