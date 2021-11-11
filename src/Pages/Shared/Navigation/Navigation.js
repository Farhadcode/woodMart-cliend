import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar className="navbar" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="logo-style"><Link to="/home"> <span className="log-name">Wood</span><span className="log-name-end">Mart</span></Link></Navbar.Brand>
                    <Navbar.Toggle className="toggle" />
                    <Navbar.Collapse className="justify-content">
                        <Nav className="nav-style">
                            <Link to="/home">Home</Link>
                            <Link to="/products">products</Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;