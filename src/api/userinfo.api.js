import routes from './api.config'

const url = 'http://localhost:5000' + routes.userinfo

export const userinfo = async (data = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    })
    var responseData = await response.json()
  } catch (err) {
    throw new Error('User get failed')
  }
  return responseData
}
