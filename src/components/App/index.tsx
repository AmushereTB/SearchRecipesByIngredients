import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from "../Home";
import RecipeDetail from "../RecipeDetail";
import NavBar from "../NavBar";
import Login from "../LogIn";
import ProfilePage from "../ProfilePage";
import {ILoginData} from "../../Interfaces";

const App = () => {
    // const user = true;
    const [loginData, setLoginData] = useState<ILoginData>();

    return (
        <Router>
            <NavBar loginData={loginData} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/login" element={<Login setLoginData={setLoginData} />}/>
                <Route path="profile/:googleId" 
                       element={ <ProfilePage loginInfo={loginData} /> } />
            </Routes>
        </Router>
    );
};

export default App;
