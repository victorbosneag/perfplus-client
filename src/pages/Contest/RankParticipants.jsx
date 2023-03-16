import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getParticipant } from '../../api/participantget.api';
import { NewFormInput } from '../../components/inputTable/style';
import Table from '../../components/table';
import { PageContainer } from './ContestList.style'
import { SubmitButton } from '../../components/formBox/style';
function RankParticipants() {
  const columns = ["ID", "First Name", "Last Name", "Result", "Award"];
  const [tableBody, setTableBody] = useState([])
  const { id } = useParams();
  const handleInputChange = (event, participantId, column) =>{
    console.log(event)
  }
  useEffect(()=>{
    const fetchData = async () =>{
      console.log(id)
      const response = await getParticipant(id.toString(),undefined,100)
      const parsedParticipantData = response.data.map((participantEntry) =>{
        return{
          id: participantEntry.id,
          firstName: participantEntry.firstName,
          lastName: participantEntry.lastName
        }
      })
      const listParticipantData = parsedParticipantData.map((element)=>{
        let participantData = []
        for(let key in element){
          if(element.hasOwnProperty(key)){
            participantData.push(element[key]);
          }
        }
       
        participantData.push(<NewFormInput name={"Result"} onchange={handleInputChange(element.id,0)} />)
        participantData.push(<NewFormInput name={"Award"} onchange={handleInputChange(element.id,1)} />)

        console.log(participantData)
        return participantData;
      })
      setTableBody(listParticipantData)
    }
    fetchData();
  },[id])
  return (
    <PageContainer>
      <Table columns = {columns} tableBody={tableBody} />
      <SubmitButton type="input">Rank</SubmitButton>
    </PageContainer>
  )
}

export default RankParticipants