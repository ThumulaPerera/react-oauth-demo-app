import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import LandingPage from "./LandingPage";
import ItemPage from "./ItemPage";
import AboutPage from "./AboutPage";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

const userInfoEndpoint = "http://localhost:4180/oauth2/userinfo";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [isCheckingUserinfo, setIsCheckingUserinfo] = useState(true);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    console.log("fetching user info started");
    const response = await fetch(userInfoEndpoint);
    const jsonData = await response.json();
    console.log(jsonData);
    setUserInfo(jsonData);
    setIsCheckingUserinfo(false);
    console.log("fetching user info done");
  };

  return(
    <Router>
      <Navbar user={userInfo?.user}/>
      <Routes>
        <Route path="/" element={<LandingPage userInfo={userInfo} />} />
        <Route path="/items" 
          element={
            <ProtectedRoute user={userInfo?.user} isCheckingUserinfo={isCheckingUserinfo}>
              <ItemPage />
            </ProtectedRoute>
          } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App;
