import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'
import Login from './../../Login/Login/Login';


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
                            <Link to="/login">Login</Link>
                            {/* {user?.email ?
                                <Link to="/home"> <button className="main-btn rounded-pill"> LogOut</button></Link>
                                :
                                <Link to="/login"> <button className="main-btn rounded-pill">Login </button></Link>
                            } */}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;