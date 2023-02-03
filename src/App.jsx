import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ParticipantsList from "./pages/ParticipantsList";
import { createContext, useEffect, useState } from "react";
import loginCheck from "./utils/loggedin.util";
import LogOut from "./pages/LogOut";
import ContestCreate from "./pages/ContestCreate";

const refreshSpeed = 10000;
export const LoginContext = createContext(false);
export const ParticipantDataContext = createContext({});

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  useEffect(() => {
    setIsSignIn(loginCheck());
    
    const interval = setInterval(() => {
      console.log(localStorage.getItem("token"));
      setIsSignIn(loginCheck());
    }, refreshSpeed);
    return () => clearInterval(interval);
    
  }, []);
  return (
    <LoginContext.Provider value={{isSignIn, setIsSignIn}}>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<ParticipantsList />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="participants" element={<ParticipantsList />} />
          <Route path="logout" element={<LogOut />} />
          <Route path="newcontest" element={isSignIn ? (<ContestCreate />): (<Login />)} />
          
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}
export default App;
