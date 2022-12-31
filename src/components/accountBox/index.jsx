import React from "react";
import {
  FormContainer,
  LoginContainer,
  FormLabel,
  FormEntryContainer,
  FormInput,
} from "./style";

function AccountForm(props) {
  return (
    <LoginContainer>
      <FormContainer>
        {props.formData.map((data)=>{
          return(
            <FormEntryContainer>
              <FormLabel>{data.label}</FormLabel>
              <FormInput name={data.name} type={data.type}></FormInput>
            </FormEntryContainer>
          );
        })}
      </FormContainer>
    </LoginContainer>
  );
}

export default AccountForm;
