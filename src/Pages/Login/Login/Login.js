
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {

    const [loginData, setloginData] = useState({});
    const { user, registerUser, loginUser, logOut } = useAuth()


    // const { user, loginUser, isLoading, authError, signInwithGoogle } = useAuth();

    // const location = useLocation();
    // const history = useHistory();
    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setloginData(newLoginData);
        console.log(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }



    return (
        <div>
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


                <input type="submit" />
                <NavLink

                    to="/register"> <Button variant="text">New User? Pleace Login </Button></NavLink>

            </form>



        </div>
    );
};

export default Login;



