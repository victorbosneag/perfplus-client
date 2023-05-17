import React, { useEffect, useState } from 'react'
import { listContest } from '../../api/contestlist.api'
import Table from '../../components/table'
import { ContestPageLink, PageContainer } from './ContestList.style'

function ContestList () {
  const [tableBody, setTableBody] = useState([])
  const columns = [
    'ID',
    'Name',
    'Subject',
    'Date',
    'Is Active?',
    'Ministry Ack',
    'Created By',
    'Test'
  ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRaw = await listContest()
        const response = responseRaw.data
        const parsedContestData = response.map((contestEntry) => {
          return {
            id: contestEntry.id,
            contestName: contestEntry.contestName,
            subject: contestEntry.subject,
            date: contestEntry.date,
            isActive: contestEntry.isActive ? 'Yes' : 'No',
            ackMinister: contestEntry.ackMinister ? 'Yes' : 'No',
            username: contestEntry.username,
          }
        })
        const contestList = parsedContestData.map((contestEntry) => {
          console.log(contestEntry)
          let contestData = []
          for (let key in contestEntry) {
            if (contestEntry.hasOwnProperty(key)) {
              contestData.push(contestEntry[key])
            }
          }
          contestData.push(<ContestPageLink to={'/contest/' + contestEntry.id}>View Contest</ContestPageLink>)
          console.log(contestData)
          return contestData
        })
        setTableBody(contestList)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (

    <PageContainer>
      <Table columns={columns} tableBody={tableBody}/>
    </PageContainer>

  )
}

export default ContestList
