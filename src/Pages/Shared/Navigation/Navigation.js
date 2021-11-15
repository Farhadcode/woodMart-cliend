import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout, admin } = useAuth()
    // console.log(user);

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
                            {/* <Link to="/login">Login</Link> */}

                            {
                                user?.email ?
                                    <Link to="/userDashboard">Dashboard</Link> : ""
                            }
                            {
                                user?.email && admin ?
                                    <Link to="/admin">Admin</Link> : ""
                            }
                            {user?.email ?
                                <Link to="/home"> <button onClick={logout} className="main-btn rounded-pill"> LogOut</button></Link>
                                :
                                <Link to="/login"> <button className="main-btn rounded-pill">Login </button></Link>
                            }
                            <Navbar.Text>
                                <Link to="/home">{user?.displayName}</Link>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;