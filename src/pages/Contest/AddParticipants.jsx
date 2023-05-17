import React from 'react'
import { useParams } from 'react-router-dom'
import { addParticipant } from '../../api/addparticipant.api'
import { findContest } from '../../api/contestfind.api'
import CustomForm from '../../components/formBox'
import InputTable from '../../components/inputTable'

const columns = ['First Name', 'Last Name', 'Highschool']
const columnIds = ['firstName', 'lastName', 'highschool']

function AddParticipants () {
  const { id } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const contestResponse = await findContest(id)
    const contestName = contestResponse.contestName
    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries())
    const contentArray = JSON.parse(value.participants)
    const requestObject = {
      contest: contestName,
      participants: contentArray
    }
    const participantResponse = await addParticipant(requestObject)
    console.log(participantResponse)
    window.location.reload(false)
  }
  return (
    <CustomForm
      formData={[]}
      title="Add participants"
      buttonText="Add participants"
      submitFunction={handleSubmit}
    >
      <InputTable columns={columns} columnIds={columnIds}/>
    </CustomForm>
  )
}

export default AddParticipants
