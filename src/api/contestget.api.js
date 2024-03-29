import routes from './api.config'

const url = 'http://localhost:5000' + routes.contestget

export const getContest = async () => {
  try {
    const response = fetch(url, {
      method: 'GET'
    })
    const responseRawData = await response
    return await responseRawData.json()
  } catch (err) {
    throw new Error('Contest list error')
  }
}