import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ParticipantsList from "./pages/ParticipantsList";
import { createContext, useEffect, useState } from "react";
import loginCheck from "./utils/loggedin.util";

const refreshSpeed = 10000;
export const LoginContext = createContext(false);

function App() {
  
  const [isSignIn, setIsSignIn] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSignIn(loginCheck());
    }, refreshSpeed);
    return () => clearInterval(interval);
  }, []);
  return (
    <LoginContext.Provider value={{isSignIn, setIsSignIn}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="participants" element={<ParticipantsList />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}
export default App;
