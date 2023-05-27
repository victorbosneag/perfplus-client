import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {addParticipant} from '../../api/addparticipant.api'
import {findContest} from '../../api/contestfind.api'
import CustomForm from '../../components/formBox'
import InputTable from '../../components/inputTable'
import Modal from "../../components/modal";
import objectToTable from "../../utils/objectToTable";
import Table from "../../components/table";
import {ModalContentContainer, TableTitle} from "./AddParticipants.style";
import getToken from "../../utils/gettoken.util";

const columns = ['First Name', 'Last Name', 'Highschool']
const columnIds = ['firstName', 'lastName', 'highschool']

function AddParticipants() {
  const {id} = useParams()
  const [modal, setModal] = useState(false);
  const [results, setResults] = useState({errors: [], created: [], skipped: [], invalid: []});
  const modalClose = () => {
    window.location.reload();
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const contestResponse = await findContest(id)
    const contestName = contestResponse.contestName
    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries())
    const contentArray = JSON.parse(value.participants)
    const requestObject = {
      token: getToken(),
      contest: contestName,
      participants: contentArray
    }
    const participantResponse = await addParticipant(requestObject)
    const responseResult = {
      errors: objectToTable(participantResponse.errors),
      created: objectToTable(participantResponse.created),
      skipped: objectToTable(participantResponse.skipped),
      invalid: objectToTable(participantResponse.invalid)
    }
    setResults(responseResult);
    setModal(true)
  }
  return (
    <>
      <Modal modal={modal} setModal={setModal} onModalClose={modalClose}>
        <ModalContentContainer>
          <TableTitle>Created</TableTitle>
          {results.created[0] ? <Table columns={["First Name", "Last Name"]} tableBody={results.created}/> :
            <p>No data</p>}
          <TableTitle>Errors</TableTitle>
          {results.errors[0] ? <Table columns={["First Name", "Last Name"]} tableBody={results.errors}/> :
            <p>No data</p>}
          <TableTitle>Skipped</TableTitle>
          {results.skipped[0] ? <Table columns={["First Name", "Last Name"]} tableBody={results.skipped}/> :
            <p>No data</p>}
          <TableTitle>Invalid</TableTitle>
          {results.invalid[0] ? <Table columns={["First Name", "Last Name"]} tableBody={results.invalid}/> :
            <p>No data</p>}

        </ModalContentContainer>

      </Modal>
      <CustomForm
        formData={[]}
        title="Add participants"
        buttonText="Add participants"
        submitFunction={handleSubmit}
      >
        <InputTable columns={columns} columnIds={columnIds}/>
      </CustomForm></>
  )
}

export default AddParticipants
