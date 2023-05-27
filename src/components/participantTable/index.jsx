import React, {useEffect, useState} from 'react'
import {getParticipant} from '../../api/participantget.api'
import Table from '../table'

import {PageContainer, PaginationContainer} from './style'
import PageSelect from "../pageSelect";

function ParticipantsTable(props) {
  let columns = props.columns
  let selectionContest = props.selectionContest
  let selectionHighSchool = props.selectionHighSchool
  let selectionItems = 10

  function handlePageClick(event) {
    setPagination({nrPage: pagination.nrPage, currentPage: event.selected + 1})
  }

  const [pagination, setPagination] = useState({nrPage: 15, currentPage: 1})
  //let contestList = useContext(ParticipantDataContext)

  //const columns = ["ID", "First Name", "Last Name", "Result", "Award"];
  //use state and use effect for contest data
  //const [dataContest, setData] = useState([]);
  //const [selectionContest, setSelectionContest] = useState("All");
  const [tableBody, setTableBody] = useState([])
  //on filter change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getParticipant(selectionContest, selectionHighSchool, selectionItems, pagination.currentPage,)
        setPagination({
          nrPage: Math.ceil(response.total / Number(response.pageSize)), currentPage: pagination.currentPage
        })
        const participantList = response.data.map((participantEntry) => {
          let participantData = []
          for (let key in participantEntry) {
            if (participantEntry.hasOwnProperty(key)) {
              participantData.push(participantEntry[key])
            }
          }
          participantData = participantData.slice(0, 5).concat(participantData[9]).concat((participantData[10]))

          return participantData
        })
        setTableBody(participantList)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [selectionContest, selectionHighSchool, selectionItems, pagination.currentPage])

  return (<PageContainer>
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

  </PageContainer>)
}

export default ParticipantsTable
