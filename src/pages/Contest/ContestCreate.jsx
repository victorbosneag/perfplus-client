import React from 'react'
import { contestcreate } from '../../api/contestcreate.api'
import InputCalendar from '../../components/calendar'
import CustomForm from '../../components/formBox'
import getToken from '../../utils/gettoken.util'
import formData from './ContestCreate.config'

function ContestCreate () {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = new FormData(event.target)
    let value = Object.fromEntries(data.entries())
    console.log(value)
    try {
      value['token'] = getToken()
      const resp = await contestcreate(value)
      console.log(resp)
    } catch (err) {
      console.log('Create Contest fail')
    }
  }
  return (
    <CustomForm formData={formData} title="Create Contest" buttonText="Create" submitFunction={handleSubmit}>
      <InputCalendar/>
    </CustomForm>
  )
}

export default ContestCreate