import React from "react";
import {
  FormContainer,
  FormLabel,
  FormEntryContainer,
  FormInput,
} from "./style";

function AccountForm(props) {
  return (
    <FormContainer>
      {props.formData.map((data) => {
        return (
          <FormEntryContainer>
            <FormLabel>{data.label}</FormLabel>
            <FormInput name={data.name} type={data.type}></FormInput>
          </FormEntryContainer>
        );
      })}
    </FormContainer>
  );
}

export default AccountForm;
