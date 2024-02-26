import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'lightgrey',
};

function Header({ title }) {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        {/* <Navbar.Brand href="/">{title}</Navbar.Brand> */}
        <Logo atl={ title } style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
}

export default Header;
