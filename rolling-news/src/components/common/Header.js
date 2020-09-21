import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

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