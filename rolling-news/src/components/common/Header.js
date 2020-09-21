import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <div>
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="#">Criptos</Navbar.Brand>
  </Navbar>
</Container>   
        </div>
    );
};

export default Header;