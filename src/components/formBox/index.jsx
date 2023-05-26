import React from 'react'
import {
  FormContainer,
  FormEntryContainer,
  FormInput,
  FormLabel,
  LoginContainer,
  LoginTitle,
  SubmitButton,
} from './style'

function CustomForm (props) {
  return (
    <LoginContainer>

      <FormContainer onSubmit={props.submitFunction} autoComplete={'off'}>
        <LoginTitle>{props.title}</LoginTitle>
        {props.formData.map((data) => {
          return (
            <FormEntryContainer>
              <FormLabel>{data.label}</FormLabel>
              <FormInput name={data.name} type={data.type}></FormInput>
            </FormEntryContainer>
          )
        })}
        {props.children}
        <SubmitButton type="input">{props.buttonText}</SubmitButton>
      </FormContainer>
    </LoginContainer>
  )
}

export default CustomForm
