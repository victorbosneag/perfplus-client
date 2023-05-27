// noinspection JSPotentiallyInvalidConstructorUsage

import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {addpost} from '../../api/addpost.api'
import CustomForm from '../../components/formBox'
import formData from './AddPost.config'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import turndown from 'turndown'
import getToken from "../../utils/gettoken.util";

function AddPost () {
  const { id } = useParams()
  const [value, setValue] = useState('')
  const [mdValue, setMdValue] = useState('')
  const turndownService = new turndown()
  const handleBodyUpdate = (content) => {
    const markdown = turndownService.turndown(content)
    setMdValue(markdown)
    setValue(content)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries())
    const requestBody = {
      token: getToken(),
      title: value.title,
      body: value.text,
      type: 'info',
      contest: Number(id),
    }
    try {
      const response = await addpost(requestBody)
      console.log(response)
    } catch (err) {
      console.log(err)
      alert('Post add fail')
    }
    setValue('')

  }
  return (
    <CustomForm
      formData={formData}
      title="Create post"
      submitFunction={handleSubmit}
      buttonText="Post"
    >
      <input type="hidden" name="text" value={mdValue}/>
      <ReactQuill theme="snow" value={value} onChange={handleBodyUpdate}/>
    </CustomForm>
  )
}

export default AddPost
