import React from 'react';
import { Container, Dropdown, DropdownButton, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout, admin } = useAuth();


    return (
        <>
            <Navbar className="navbar" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="logo-style"><Link to="/home"> <span className="log-name">WOOD</span><span className="log-name-end">MART</span></Link></Navbar.Brand>
                    <Navbar.Toggle className="toggle" />
                    <Navbar.Collapse className="justify-content">
                        <Nav className="nav-style">
                            <Link to="/home">Home</Link>
                            <Link to="/products">products</Link>


                            {
                                user?.email ?
                                    <Link to="/userDashboard">Dashboard</Link> : ""
                            }
                            {
                                user?.email && admin ?
                                    <Link to="/admin">Admin</Link> : ""
                            }

                            <p className="name">
                                {user?.displayName}</p>

                            {user?.email ?
                                <Link to="/home"> <button onClick={logout} className="main-btn rounded-pill"> LogOut</button></Link>

                                :
                                <Link to="/login"> <button className="main-btn rounded-pill">Login </button></Link>
                            }


                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;