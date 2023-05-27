import React from 'react'
import {SidebarContentContainer} from '../Contest/ContestInfo.style'
import {Route, Routes} from 'react-router-dom'
import UserInfo from './UserInfo'

function UserPage () {
  return (
    <SidebarContentContainer>
      <Routes>
        <Route index element={<UserInfo/>}/>
      </Routes>
    </SidebarContentContainer>
  )
}

export default UserPage
