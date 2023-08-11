import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import LandingPage from "./LandingPage";
import ProtectedPage from "./ProtectedPage";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

const userInfoEndpoint = window.config.oauth2ProxyBaseUrl + "/oauth2/userinfo";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [isCheckingUserinfo, setIsCheckingUserinfo] = useState(true);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    console.log("fetching user info started");
    fetch(userInfoEndpoint)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData);
        setUserInfo(jsonData);
        setIsCheckingUserinfo(false);
        console.log("fetching user info done");
      })
      .catch(error => {
        console.log("Error fetching user info");
        console.log(error);
      })
  };

  return(
    <Router>
      <Navbar user={userInfo?.user}/>
      <Routes>
        <Route path="/" element={<LandingPage userInfo={userInfo} />} />
        <Route path="/protected" 
          element={
            <ProtectedRoute user={userInfo?.user} isCheckingUserinfo={isCheckingUserinfo}>
              <ProtectedPage />
            </ProtectedRoute>
          } />
      </Routes>
    </Router>
  )
}

export default App;
