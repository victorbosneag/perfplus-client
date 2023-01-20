const logout = () => {
  try {
    localStorage.removeItem("token");
  } catch (err) {
    console.log(err);
  }
};

export default logout;
