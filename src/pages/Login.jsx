import React from "react";
import AccountForm from "../components/accountBox";
import { LoginContainer, LoginTitle } from "./LoginStyle";

function Login() {
  const formData = [
    {
      label: "Email",
      name: "email",
      type: "text",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ];
  return (
    <LoginContainer>
      <LoginTitle>Welcome back!</LoginTitle>
      <AccountForm formData={formData} />
    </LoginContainer>
  );
}

export default Login;
