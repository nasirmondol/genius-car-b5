import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import Logo from '../../../images/Logo/logo.png';

const Header = () => {
    return (
        <Navbar sticky="top" bg="primary" variant="dark">
            <Container>
                <img height={30} src={Logo} alt="" />
            </Container>
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;