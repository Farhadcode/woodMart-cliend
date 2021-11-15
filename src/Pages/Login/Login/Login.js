
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import './Login.css'

const Login = () => {

    const [loginData, setloginData] = useState({});



    const { user, loginUser, isLoading, authError, signInwithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setloginData(newLoginData);
        //console.log(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInwithGoogle(location, history)
    }

    return (
        <div className="from-style mx-5">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>

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


                <input className="main-btn rounded-pill " type="submit" value="Login" />
                <br />
                <NavLink

                    to="/register"> <Button variant="text">New User? Pleace Registard </Button></NavLink>

            </form>

            {
                user?.email && <div className="alert alert-success" role="alert">
                    User Loging successfully
                </div>
            }
            {
                authError && <div class="alert alert-danger" role="alert">
                    {authError}
                </div>
            }
            {
                isLoading && <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Login</span>
                </div>
            }



            <p> -----------------------------------</p>
            <Button onClick={handleGoogleSignIn} className="btn btn-success"> Google Sing In</Button>

        </div>
    );
};

export default Login;



