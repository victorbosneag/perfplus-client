import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
`
export const LoginTitle = styled.div`
  font-size: xx-large;
  color: ${props => props.theme.accent1};
  margin: 35px;
  font-weight: bold;
`

export const FormContainer = styled.form`
  min-width: 400px;
  //height: 600 px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border-style: solid;
  border-color: ${props => props.theme.border};
  overflow: hidden;
  align-items: center;
  background-color: #f1f1f1;
`

export const FormLabel = styled.label`
  color: ${props => props.theme.text1};
`

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  max-width: 300px;
  border-style: solid;
  border-color: ${props => props.theme.border};
  border-width: 2px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`

export const FormEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin: 10px;
`

export const SubmitButton = styled.button`
  width: 50%;
  height: 35px;
  background-color: ${props => props.theme.accent1};
  border-radius: 10px;
  margin: 5px;
  border-width: 2px;
  border-color: black;
  font-size: medium;
  color: ${props => props.theme.links};
`