import React, { useContext, useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { findContest } from '../../api/contestfind.api'
import { SidebarContentContainer } from './ContestInfo.style'
import { ContestContext } from './ContestPage'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { getConfig } from '../../api/getconfig.api'
import ContestOverview from './ContestOverview'
import AddParticipants from './AddParticipants'
import RankParticipants from './RankParticipants'
import AddPost from './AddPost'
import Login from '../Login'
import ContestCreate from './ContestCreate'
import InfoPage from './ContestPages/InfoPage'
import { LoginContext } from '../../App'
import ContestPosts from './ContestPages/ContestPosts'

function ContestInfo () {
  const isSignIn = useContext(LoginContext).isSignIn
  const { id } = useParams()
  const [name, setName] = useState('')
  const [date, setDate] = useState()
  const [subject, setSubject] = useState('None')
  const [createdBy, setCreatedBy] = useState('None')
  const [contestMenus, setContestMenus] = useState([])
  const [loadDone, setLoadDone] = useState(false)
  const setContestSelected = useContext(ContestContext).setContestSelected

  useEffect(() => {
    const fetchData = async () => {
      const responseContest = await findContest(id)
      setName(responseContest.contestName)
      setDate(responseContest.date)
      setSubject(responseContest.subject)
      setCreatedBy(responseContest.username)
      if (responseContest.contestName) {
        setLoadDone(true)
      }
      const responseConfig = await getConfig(id)
      let displayRoutes = []
      if (responseConfig.hasAnswers) {
        displayRoutes.push({ name: 'Answers', route: 'answers' })
      }
      if (responseConfig.hasSubjects) {
        displayRoutes.push({ name: 'Subjects', route: 'subjects' })
      }
      setContestMenus(displayRoutes)
    }
    fetchData()
    setContestSelected(id)
  }, [id, setContestSelected])

  return (
    <>
      {loadDone ? (
        <SidebarContentContainer>
          <Sidebar>
            <Menu>
              {contestMenus.map((element) => {
                return (
                  <MenuItem component={<Link to={element.route}/>}>
                    {element.name}
                  </MenuItem>
                )
              })}
            </Menu>
          </Sidebar>
          <Routes>
            <Route
              index
              element={
                <ContestOverview
                  name={name}
                  date={date}
                  subject={subject}
                  createdBy={createdBy}
                ></ContestOverview>
              }
            />
            <Route path="register" element={<AddParticipants/>}/>
            <Route path="rank" element={<RankParticipants/>}/>
            <Route path="postcreate" element={<AddPost/>}/>
            <Route path="posts/*" element={<ContestPosts contest={id}/>}/>
            <Route
              path="create"
              element={isSignIn ? <ContestCreate/> : <Login/>}
            />
            {contestMenus.map((element) => {
              return (
                <Route path={element.route} element={<InfoPage contest={id} type={element.route}/>}/>
              )
            })}
          </Routes>
        </SidebarContentContainer>) : (<div>Loading</div>)}
    </>
  )
}

export default ContestInfo
