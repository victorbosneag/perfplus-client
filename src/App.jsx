import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ParticipantsList from "./pages/ParticipantsList";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="participants" element={<ParticipantsList />} />
      </Routes>
    </Router>
  );
}
export default App;
