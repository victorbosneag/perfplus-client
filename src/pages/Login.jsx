import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/login.api'
import { LoginContext } from '../App'
import CustomForm from '../components/formBox'
//import loginCheck from "../utils/loggedin.util";
import formData from './LoginForm.config'

function Login () {
  const setIsSignIn = useContext(LoginContext).setIsSignIn
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries())
    try {
      await login(value)
      setIsSignIn(true)
    } catch (err) {}
    navigate('/')
  }
  return (
    <CustomForm
      formData={formData}
      title="Sign in"
      submitFunction={handleSubmit}
      buttonText="Sign in"
    />
  )
}

export default Login
