const logout = () => {
  try {
    localStorage.clear()
  } catch (err) {
    console.log(err)
  }
}

export default logout
