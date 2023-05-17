import routes from './api.config'

const url = 'http://localhost:5000' + routes.contestfind

export const findContest = async (id) => {
  try {
    let urlObj = new URL(url)
    const data = {
      id: id,
    }
    for (let i in data) {
      urlObj.searchParams.append(i, data[i])
    }
    const response = fetch(urlObj, {
      method: 'GET'
    })

    const responseRawData = await response
    return await responseRawData.json()
  } catch (err) {
    throw new Error('Participant list error')

  }
}