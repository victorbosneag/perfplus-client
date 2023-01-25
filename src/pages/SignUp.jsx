import React from "react";
import { signup } from "../api/signup.api";
import AccountForm from "../components/formBox";
import formData from "./SignUpForm.config"

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  console.log(value)
  
  signup(value).then(()=>{
    console.log("yay :D");
  }).catch((err)=>{
    console.log("Fail");
  });
}

function Signup() {
  
  return (
    
    <AccountForm formData={formData} title="Codeforces" submitFunction={handleSubmit} buttonText="Sign up" />
    
  );
}

export default Signup;
