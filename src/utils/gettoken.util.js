import logout from './logout.util'

const getToken = () => {
  const token = localStorage.getItem('token')
  if (token) {
    const tokenVal = JSON.parse(token)
    return tokenVal.token
  } else {
    logout()
    return false
  }
}

export default getToken