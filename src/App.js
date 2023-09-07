import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";


import './App.css';
import LandingPage from "./LandingPage";
import ProtectedPage from "./ProtectedPage";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";
import Callback from "./Callback";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isCheckingLoggedInState, setIsCheckingLoggedInState] = useState(true);

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  const checkIsLoggedIn = () => {
    const idToken = sessionStorage.getItem("idToken");
    if (idToken !== null) {
      setIsLoggedIn(true);
      var decodedIdToken = jwt_decode(idToken);
      setUserInfo(decodedIdToken);
      console.log(decodedIdToken);
    };
    setIsCheckingLoggedInState(false);
    console.log("isCheckingLoggedInState: " + isCheckingLoggedInState);
    console.log("isLoggedIn: " + isLoggedIn);
  };
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage userInfo={userInfo} />} />
        <Route path="/auth/callback" element={<Callback />} />
        <Route path="/protected"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} isCheckingLoggedInState={isCheckingLoggedInState}>
              <ProtectedPage />
            </ProtectedRoute>
          } />
      </Routes>
    </Router>
  )
}

export default App;
