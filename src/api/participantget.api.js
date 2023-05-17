import routes from './api.config'

const url = 'http://localhost:5000' + routes.participantget

export const getParticipant = async (contest, highschool, items, page) => {
  try {
    let urlObj = new URL(url)
    const data = {
      contestName: contest,
      hsName: highschool,
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
    //console.log(responseRawData);
    const responseData = await responseRawData.json()
    console.log(responseData)
    return responseData
  } catch (err) {
    console.log(err)
    throw new Error('Participant list error')

  }
}