import logout from './logout.util'

const getRole = () => {
  const role = localStorage.getItem('role')
  if (role) {
    const roleVal = JSON.parse(role)
    return roleVal.role
  } else {
    logout()
    return false
  }
}

export default getRole;