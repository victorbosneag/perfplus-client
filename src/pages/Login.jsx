import React from "react";
import AccountForm from "../components/accountBox";
import formData from "./LoginForm.config"

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.elements);
}

function Login() {
  
  return (
    
    <AccountForm formData={formData} title="Sign in" submitFunction={handleSubmit} buttonText="Sign in" />
    
  );
}

export default Login;
