import routes from './api.config'

const url = 'http://localhost:5000' + routes.contestlist

export const listContest = async (items, page) => {
  try {
    let urlObj = new URL(url)
    const data = {
      nrItems: items,
      nrPage: page
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
    throw new Error('Contest list error')
  }
}