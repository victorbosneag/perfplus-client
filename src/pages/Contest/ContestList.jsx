import React, {useEffect, useState} from 'react'
import {listContest} from '../../api/contestlist.api'
import Table from '../../components/table'
import {ContestPageLink, PageContainer} from './ContestList.style'
import PageSelect from "../../components/pageSelect";
import {PaginationContainer} from "../../components/participantTable/style";

function ContestList() {
  const [tableBody, setTableBody] = useState([])
  const [pagination, setPagination] = useState({nrPage: 15, currentPage: 1})
  let selectionItems = 10;

  function handlePageClick(event) {
    setPagination({nrPage: pagination.nrPage, currentPage: event.selected + 1})
  }

  const columns = [
    'ID',
    'Name',
    'Subject',
    'Date',
    'Is Active?',
    'Ministry Ack',
    'Created By',
    'View contest'
  ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRaw = await listContest(selectionItems, pagination.currentPage)
        const response = responseRaw.data;
        console.log(responseRaw)
        console.log(Math.ceil(responseRaw.total / Number(responseRaw.pageSize)))
        setPagination({
          nrPage: Math.ceil(responseRaw.total / Number(responseRaw.pageSize)), currentPage: pagination.currentPage
        })
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
          //console.log(contestEntry)
          let contestData = []
          for (let key in contestEntry) {
            if (contestEntry.hasOwnProperty(key)) {
              contestData.push(contestEntry[key])
            }
          }
          contestData.push(<ContestPageLink to={'/contest/' + contestEntry.id}>View Contest</ContestPageLink>)
          //console.log(contestData)
          return contestData
        })
        setTableBody(contestList)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [selectionItems, pagination.currentPage])
  return (

    <PageContainer>
      <Table columns={columns} tableBody={tableBody}/>
      <PaginationContainer> <PageSelect
        breakLabel="..."
        nextLabel="next->"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pagination.nrPage}
        previousLabel="<-previous"
        renderOnZeroPageCount={null}
      /></PaginationContainer>
    </PageContainer>

  )
}

export default ContestList
