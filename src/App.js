import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import LandingPage from "./LandingPage";
import ProtectedPage from "./ProtectedPage";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

const userInfoEndpoint = "/auth/userinfo";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [isCheckingUserinfo, setIsCheckingUserinfo] = useState(true);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    console.log("fetching user info started");
    fetch(userInfoEndpoint)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("API returned an error. Status: "
            + response.status
            + "("
            + response.statusText
            + ")");
        }
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        setUserInfo(jsonData);
        setIsCheckingUserinfo(false);
        console.log(userInfo)
        console.log("fetching user info done");
      })
      .catch(error => {
        setUserInfo(null);
        setIsCheckingUserinfo(false);
        console.log("Error fetching user info");
        console.log(error);
      })
  };

  return (
    <Router>
      <Navbar user={userInfo} />
      <Routes>
        <Route path="/" element={<LandingPage userInfo={userInfo} />} />
        <Route path="/protected"
          element={
            <ProtectedRoute user={userInfo} isCheckingUserinfo={isCheckingUserinfo}>
              <ProtectedPage />
            </ProtectedRoute>
          } />
      </Routes>
    </Router>
  )
}

export default App;
