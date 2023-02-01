import React from 'react'
import CustomForm from '../components/formBox'
import formData from './ContestCreate.config'

function ContestCreate() {
  const handleSubmit = (event)=>{
    console.log(event);
  }
  return (
    <CustomForm formData={formData} title="Create Contest" buttonText="Create" submitFunction={handleSubmit}/>
  )
}

export default ContestCreate