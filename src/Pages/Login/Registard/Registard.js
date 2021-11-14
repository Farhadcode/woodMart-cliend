import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Registard = () => {

    const [loginData, setloginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();


    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData);
        setloginData(newLoginData);
        console.log(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <div className="from-style mx-5">
            <h2> Registard </h2>
            <form onSubmit={handleRegisterSubmit}>

                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    onBlur={handelOnBlur}
                    defaultValue=""

                />

                <br />

                <input
                    name="password"
                    type="password"
                    onBlur={handelOnBlur}
                    placeholder="Your Password"
                />
                <br />

                <input
                    name="password2"
                    type="password"
                    onBlur={handelOnBlur}
                    placeholder="ReType Your Password"
                />

                <br />

                <input className="main-btn rounded-pill" type="submit" value="Registerd" />
                <br />
                <NavLink

                    to="/login"> <Button variant="text">New User? Pleace Login </Button></NavLink>
            </form>
        </div>
    );
};

export default Registard;