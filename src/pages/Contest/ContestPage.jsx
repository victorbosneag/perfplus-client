import React, {createContext, useContext, useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import {LoginContext} from '../../App'
import Option from '../../components/optionBar'
import ContestCreate from './ContestCreate'
import ContestInfo from './ContestInfo'
import ContestList from './ContestList'

export const ContestContext = createContext(false)

function ContestPage(props) {
  const isSignIn = useContext(LoginContext).isSignIn
  const location = useLocation()
  const urlRoot = "contest/"
  let leftLinks = [{route: '/contest/list', title: 'List'}]
  let rightLinks = [{route: '/contest/create', title: 'Create Contest'}]
  let contestLeftLinks = []
  const contestRightLinks = (contestId) => {
    return [
      {route: 'contest/' + contestId + '/register', title: 'Register Participants'},
      {route: 'contest/' + contestId + '/rank', title: 'Rank Participants'},
      {route: 'contest/' + contestId + '/postcreate', title: 'Create Post'},
    ]
  }
  useEffect(() => {
    console.log(location)
    const trimmedPath = location.pathname.slice(location.pathname.indexOf(urlRoot) + urlRoot.length)
    const contestId = parseInt(trimmedPath)
    const hasId = !isNaN(parseInt(trimmedPath));
    props.setOption(<Option
      leftLinks={
        hasId ? leftLinks.concat(contestLeftLinks) : leftLinks
      }
      rightLinks={
        isSignIn
          ? hasId
            ? rightLinks.concat(contestRightLinks(contestId))
            : rightLinks
          : []
      }
    />)
    // eslint-disable-next-line
  }, [location])
  return (

    <Routes>
      <Route path="list" element={<ContestList/>}/>
      <Route path="create" element={<ContestCreate/>}/>
      <Route path=":id/*" element={<ContestInfo/>}/>
    </Routes>

  )
}

export default ContestPage
