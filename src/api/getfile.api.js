import routes from './api.config'

const url = 'http://localhost:5000' + routes.getfile

export const getFile = async (contest, type) => {
  try {
    let urlObj = new URL(url)

    urlObj.searchParams.append('contest', contest)
    urlObj.searchParams.append('type', type)

    const response = fetch(urlObj, {
      method: 'GET',
    })

    const responseData = (await response)
    console.log(responseData)
    const reader = responseData.body.getReader()
    const contentLength = +responseData.headers.get('Content-Length')
    let receivedLength = 0 // received that many bytes at the moment
    let chunks = [] // array of received binary chunks (comprises the body)
    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      chunks.push(value)
      receivedLength += value.length

      console.log(`Received ${receivedLength} of ${contentLength}`)
    }

    // Step 4: concatenate chunks into single Uint8Array
    let chunksAll = new Uint8Array(receivedLength) // (4.1)
    let position = 0
    for (let chunk of chunks) {
      chunksAll.set(chunk, position) // (4.2)
      position += chunk.length
    }

    return chunksAll
  } catch (err) {
    console.log(err)
    throw new Error('Contest file error')
  }
}
