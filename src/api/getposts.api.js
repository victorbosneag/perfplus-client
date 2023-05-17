import routes from './api.config'

const url = 'http://localhost:5000' + routes.getposts

export const getposts = async (contest) => {
  const requestBody = {
    contest: contest
  }
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
      body: JSON.stringify(requestBody),
    })
    var responseData = await response.json()
  } catch (err) {
    throw new Error('Post get failed')
  }
  return responseData
}
