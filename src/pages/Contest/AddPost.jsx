import React from "react";
import { useParams } from "react-router-dom";
import { addpost } from "../../api/addpost.api";
import CustomForm from "../../components/formBox";
import formData from "./AddPost.config";

function AddPost() {
  const { id } = useParams();
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    const requestBody = {
      title: value.title,
      body: value.text,
      type: "info",
      contest: Number(id)
    }
    try{
      const response = await addpost(requestBody);
      console.log(response);
    }
    catch(err){
      console.log(err)
      alert("Post add fail");
    }
  }
  return (
    <CustomForm
      formData={formData}
      title="Create post"
      submitFunction={handleSubmit}
      buttonText="Post"
    />
  );
}

export default AddPost;
