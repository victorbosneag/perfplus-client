import routes from './api.config'

const url = 'http://localhost:5000' + routes.getconfig

export const getConfig = async (contest) => {
  try {
    let urlObj = new URL(url)

    urlObj.searchParams.append('contestId', contest)

    const response = fetch(urlObj, {
      method: 'GET'
    })

    const responseRawData = await response
    return await responseRawData.json()
  } catch (err) {
    throw new Error('Config list error')

  }
}