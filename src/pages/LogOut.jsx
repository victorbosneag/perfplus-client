import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../App'
import logout from '../utils/logout.util'

function LogOut () {
  const navigate = useNavigate()
  const setIsSignIn = useContext(LoginContext).setIsSignIn
  useEffect(() => {
    navigate('/')
    logout()
    setIsSignIn(false)
  }, [navigate, setIsSignIn])

  return <div>LogOut</div>
}

export default LogOut
