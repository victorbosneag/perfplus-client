import React from "react";
import CustomForm from "../../components/formBox";
import InputTable from "../../components/inputTable";

const columns = ["First Name", "Last Name", "Highschool"]
function AddParticipants() {
  const handleSubmit = ()=>{
    console.log("ok");
  }
  return (
    <CustomForm
      formData={[]}
      title="Add participants"
      buttonText="Add participants"
      submitFunction={handleSubmit}
    >
      <InputTable columns={columns}/>
    </CustomForm>
  );
}

export default AddParticipants;
