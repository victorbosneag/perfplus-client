// noinspection JSVoidFunctionReturnValueUsed,JSUnusedLocalSymbols

import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getParticipant} from '../../api/participantget.api'
import {NewFormInput} from '../../components/inputTable/style'
import Table from '../../components/table'
import {PageContainer} from './ContestList.style'
import {SubmitButton} from '../../components/formBox/style'
import {rankParticipant} from "../../api/rankparticipant.api";

function RankParticipants() {
  const columns = ['ID', 'First Name', 'Last Name', 'Result', 'Award']
  const [tableBody, setTableBody] = useState([])
  const {id} = useParams()
  const [resultInputs, setResultInputs] = useState([]);
  const [awardInputs, setAwardInputs] = useState([]);
  const handleInputChange = (event, participantId, entryId) => {
    const inputType = event.target.name;
    const inputTypeParsed = inputType.toLowerCase();
    if (inputTypeParsed === "result") {
      let tempArray = resultInputs;
      tempArray[entryId] = {participantId: participantId, result: event.target.value};
      setResultInputs(tempArray)
    } else if (inputTypeParsed === "award") {
      let tempArray = awardInputs;
      tempArray[entryId] = {participantId: participantId, award: event.target.value};
      setAwardInputs(tempArray);
    }

    console.log(resultInputs)
    console.log(awardInputs)
  }
  const handleSubmit = async (event) => {
    const rankings = resultInputs.concat(awardInputs);
    let newRankings = [];
    for (let i = 0; i < rankings.length; i++) {
      if (rankings[i]) {
        newRankings.push(rankings[i]);
      }
    }
    let hasError = false;
    resultInputs.forEach((value, index) => {
      if (value) {
        if (isNaN(value.result)) {
          alert(`Ranking must be a number. Error on line: ${index + 1}`);
          hasError = true;
        }
      }
    })
    if (!hasError) {
      const resposnse = await rankParticipant({rankings: newRankings})
      console.log(resposnse)
    }

  }
  useEffect(() => {
    const fetchData = async () => {
      console.log(id)
      const response = await getParticipant(id.toString(), undefined, 100)
      const parsedParticipantData = response.data.map((participantEntry) => {
        return {
          id: participantEntry.id,
          firstName: participantEntry.firstName,
          lastName: participantEntry.lastName
        }
      })
      const listParticipantData = parsedParticipantData.map((element, index) => {
        let participantData = []
        for (let key in element) {
          if (element.hasOwnProperty(key)) {
            participantData.push(element[key])
          }
        }

        participantData.push(<NewFormInput name={'Result'}
                                           onChange={(event) => handleInputChange(event, element.id, index)}/>)
        participantData.push(<NewFormInput name={'Award'}
                                           onChange={(event) => handleInputChange(event, element.id, index)}/>)

        console.log(participantData)
        return participantData
      })
      setTableBody(listParticipantData)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <PageContainer>
      <Table columns={columns} tableBody={tableBody}/>
      <SubmitButton type="input" onClick={() => {
        handleSubmit()
      }}>Rank</SubmitButton>
    </PageContainer>
  )
}

export default RankParticipants