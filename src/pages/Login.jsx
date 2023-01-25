import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/login.api";
import AccountForm from "../components/formBox";
import formData from "./LoginForm.config"



function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    await login(value);
    navigate("/")
  }
  return (
    
    <AccountForm formData={formData} title="Sign in" submitFunction={handleSubmit} buttonText="Sign in" />
    
  );
}

export default Login;
