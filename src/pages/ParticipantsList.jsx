import React, {useEffect, useState} from 'react'

import SelectComponent from '../components/customSelect'
import {FilterContainer, FilterLabel, PageContainer} from './ParticipantsList.style'
import {getContest} from '../api/contestget.api'

import ParticipantsTable from '../components/participantTable'

import {ParticipantDataContext} from '../App'

function ParticipantsList(props) {
  const columns = [
    'ID',
    'First Name',
    'Last Name',
    'Result',
    'Award',
    'Contest',
  ]
  //use state and use effect for contest data
  const [dataContest, setData] = useState([])

  let [selectionContest, setSelectionContest] = useState('All')
  let hasContest = false
  if (props.contest) {
    selectionContest = props.contest
    hasContest = true
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContest()
        const contestList = response.map((contestEntry) => {
          return {
            id: contestEntry.id,
            name: contestEntry.contestName,
          }
        })
        console.log(response)
        setData(contestList)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  function onSelectChange(event) {
    setSelectionContest(event.selection)
  }

  return (
    <PageContainer>
      {hasContest ? (
        <></>
      ) : (
        <FilterContainer>
          <FilterLabel>Contest: </FilterLabel>
          <SelectComponent
            data={dataContest}
            onSelectChange={onSelectChange}
            fieldName={'Contest'}
            defaultValue={selectionContest}
          />
        </FilterContainer>
      )}

      <ParticipantDataContext.Provider value={dataContest}>
        <ParticipantsTable
          columns={columns}
          selectionContest={selectionContest}
        />
      </ParticipantDataContext.Provider>
    </PageContainer>
  )
}

export default ParticipantsList
