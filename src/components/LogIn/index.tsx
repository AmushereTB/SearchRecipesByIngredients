import React, {useState} from 'react';
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import "./Login.css"

interface Props {
    setLoginData: Function
}

const Login = ({ setLoginData } : Props) => {
    const navigate = useNavigate();
    const handleLogin = async (googleData : any) => {
        // post ggoogleData.profileObj into database 
        const response =  await fetch('https://localhost:7137/api/Users', {
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
                clientId="348842152385-kdg8vkd6rnhvv07burv4pmune9ejalte.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;
