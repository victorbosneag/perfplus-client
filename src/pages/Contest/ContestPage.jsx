import React, {createContext, useContext, useEffect, useState} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import {LoginContext} from '../../App'
import Option from '../../components/optionBar'
import ContestCreate from './ContestCreate'
import ContestInfo from './ContestInfo'
import ContestList from './ContestList'

export const ContestContext = createContext(false)

function ContestPage(props) {
  const [contestSelected, setContestSelected] = useState(0)
  const isSignIn = useContext(LoginContext).isSignIn
  const location = useLocation()
  let leftLinks = [{route: '/contest/list', title: 'List'}]
  let rightLinks = [{route: '/contest/create', title: 'Create Contest'}]
  let contestLeftLinks = []
  const contestRightLinks = (contestId) => {
    return [
      {route: contestId + '/register', title: 'Register Participants'},
      {route: contestId + '/rank', title: 'Rank Participants'},
      {route: contestId + '/postcreate', title: 'Create Post'},
    ]
  }
  useEffect(() => {
    setContestSelected(0)
    props.setOption(<Option
      leftLinks={
        contestSelected > 0 ? leftLinks.concat(contestLeftLinks) : leftLinks
      }
      rightLinks={
        isSignIn
          ? contestSelected > 0
            ? rightLinks.concat(contestRightLinks(contestSelected))
            : rightLinks
          : []
      }
    />)
    // eslint-disable-next-line
  }, [location])
  return (
    <ContestContext.Provider value={{contestSelected, setContestSelected}}>
      <Routes>
        <Route path="list" element={<ContestList/>}/>
        <Route path="create" element={<ContestCreate/>}/>
        <Route path=":id/*" element={<ContestInfo/>}/>
      </Routes>
    </ContestContext.Provider>
  )
}

export default ContestPage
