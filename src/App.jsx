import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import AccountForm from "./components/accountBox";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
