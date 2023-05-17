import routes from './api.config'

const url = 'http://localhost:5000' + routes.contestcreate

export const contestcreate = async (data = {}) => {
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
    throw new Error('Contest create failed')
  }
  return responseData
}
