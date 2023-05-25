import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'

import Login from './pages/Login'
import Signup from './pages/SignUp'
import ParticipantsList from './pages/ParticipantsList'
import {createContext, useEffect, useState} from 'react'
import loginCheck from './utils/loggedin.util'
import LogOut from './pages/LogOut'
import ContestPage from './pages/Contest/ContestPage'
import {ProSidebarProvider} from 'react-pro-sidebar'
import UserPage from './pages/User/UserPage'
import {BodyContainer} from "./App.style";

const refreshSpeed = 10000
export const LoginContext = createContext(false)
export const ParticipantDataContext = createContext({})

function App() {
  const [isSignIn, setIsSignIn] = useState(false)
  const [optionBar, setOptionBar] = useState(<div></div>);
  useEffect(() => {
    setIsSignIn(loginCheck())

    const interval = setInterval(() => {
      console.log(localStorage.getItem('token'))
      setIsSignIn(loginCheck())
    }, refreshSpeed)
    return () => clearInterval(interval)
  }, [])
  return (
    <ProSidebarProvider>
      <LoginContext.Provider value={{isSignIn, setIsSignIn}}>
        <Router>
          <Navbar/>
          {optionBar}
          <BodyContainer>
            <Routes>
              <Route index element={<ParticipantsList/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="signup" element={<Signup/>}/>
              <Route path="participants" element={<ParticipantsList/>}/>
              <Route path="logout" element={<LogOut/>}/>
              <Route path="contest/*" element={<ContestPage setOption={setOptionBar}/>}/>
              <Route path="user/*" element={<UserPage/>}/>
            </Routes>
          </BodyContainer>
        </Router>
      </LoginContext.Provider>
    </ProSidebarProvider>
  )
}

export default App
