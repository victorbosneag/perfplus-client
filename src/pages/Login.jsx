import React from "react";
import { login } from "../api/login.api";
import AccountForm from "../components/formBox";
import formData from "./LoginForm.config"

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  console.log(value)
  login(value);
}

function Login() {
  
  return (
    
    <AccountForm formData={formData} title="Sign in" submitFunction={handleSubmit} buttonText="Sign in" />
    
  );
}

export default Login;
