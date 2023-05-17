const convertToBase64 = async (file) => {
  const filereader = new FileReader()
  return new Promise((resolve, reject) => {
    filereader.onerror = () => {
      filereader.abort()
      reject(new Error('Couldn\'t convert file to base64'))
    }
    filereader.onload = () => {
      resolve(filereader.result)
    }
    filereader.readAsDataURL(file)
  })
}

export default convertToBase64