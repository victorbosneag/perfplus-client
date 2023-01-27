import React from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/signup.api";
import CustomForm from "../components/formBox";
import formData from "./SignUpForm.config"



function Signup() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    
    
    signup(value).then(()=>{
      console.log("yay :D");
      navigate("/");
    }).catch((err)=>{
      console.log("Fail");
      navigate("/");
    });
  }
  return (
    
    <CustomForm formData={formData} title="Codeforces" submitFunction={handleSubmit} buttonText="Sign up" />
    
  );
}

export default Signup;
