import styled from "styled-components";
import { FormInput } from "../formBox/style";

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  padding-top: 15px;
  padding: 20px;
  margin: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NewFormInput = styled(FormInput)`
  width:100%;
`;