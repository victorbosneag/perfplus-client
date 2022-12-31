import React from 'react'
import AccountForm from '../components/accountBox'

function Login() {
  const formData = [
    {
      label:"Email",
      name:"email",
      type:"text"
    },
    {
      label: "Password",
      name: "password",
      type:"password"
    }
  ]
  return (
    <AccountForm formData={formData} />
  )
}

export default Login