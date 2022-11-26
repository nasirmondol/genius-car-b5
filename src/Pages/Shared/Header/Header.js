import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import Logo from '../../../images/Logo/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSingOut = () =>{
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={40} src={Logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto text-bold">
                        <Nav.Link className="header" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className="header" as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link className="header" as={Link} to="/expert">Expert</Nav.Link>
                        <NavDropdown className="header" title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link className="header" as={Link} to="/about">About</Nav.Link>
                        {
                            user && <>
                             <Nav.Link className="header" as={Link} to="/adduser">Add User</Nav.Link>
                             <Nav.Link className="header" as={Link} to="/manage">Manage</Nav.Link>
                             <Nav.Link className="header" as={Link} to="/order">Order</Nav.Link>

                            </>
                        }
                       { user ? 
                       <Button onClick={handleSingOut}>Log out</Button> :
                       <Nav.Link className="header" as={Link} to="/login">
                            Login
                        </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;