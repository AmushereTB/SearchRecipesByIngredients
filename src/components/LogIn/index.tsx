import React, {useState} from 'react';
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import {log} from "util";

interface Props {
    setLoginData: Function
}

const Login = ({ setLoginData } : Props) => {
    const navigate = useNavigate();
    const handleLogin = async (googleData : any) => {
        // post ggoogleData.profileObj into database 

        const res = await fetch(`https://recipe-backend.azurewebsites.net/api/Users/${googleData.profileObj.googleId}`);
        if (res.status === 404)
        {
            await fetch('https://recipe-backend.azurewebsites.net/api/Users', {
                method: 'POST',
                body: JSON.stringify({
                    name: googleData.profileObj.name,
                    email: googleData.profileObj.email,
                    googleId: googleData.profileObj.googleId
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        }
        
        setLoginData(googleData.profileObj);
        localStorage.setItem('loginData', JSON.stringify(googleData.profileObj));
        navigate("/");
    }
    const handleFailure = (result : any) => {
        alert(result)
    }
    return (
        <div className="section login">
            <h1 className="section-title">Login With Google</h1>
            <GoogleLogin 
                className="google-login"
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;
