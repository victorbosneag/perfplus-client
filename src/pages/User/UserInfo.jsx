import React, { useEffect, useState } from 'react'
import { userinfo } from '../../api/userinfo.api'
import getToken from '../../utils/gettoken.util'
import { PageContainer, StyledTitle, TitleContainer } from '../Contest/ContestPage.style'

function UserInfo () {
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const data = { token: getToken() }
      try {
        const resp = await userinfo(data)
        setUserInfo(resp)
      } catch (err) {

      }
    }
    fetchData()
  }, [])
  return (
    <PageContainer>
      <TitleContainer>
        <StyledTitle>{userInfo.username}</StyledTitle>
        <h3>{userInfo.email}</h3>
        <h3>{userInfo.role}</h3>
      </TitleContainer>
    </PageContainer>
  )
}

export default UserInfo
