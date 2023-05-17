import styled from 'styled-components'
import { FormInput, LoginTitle } from '../formBox/style'

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  padding: 20px;
  margin: 20px;
`



export const NewFormInput = styled(FormInput)`
  width: 100%;
`

export const Subtitle = styled(LoginTitle)`
  font-size: large;
  margin: 25px;
`

export const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const Line = styled.div`
  width: 90%;
  height: 0;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-color: green;
`