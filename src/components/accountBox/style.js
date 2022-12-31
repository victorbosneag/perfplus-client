import styled from "styled-components";


export const FormContainer = styled.form`
  width: 400px;
  //height: 600 px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border-style: solid;
  border-color: red;
  overflow: hidden;
  align-items: center;
`;

export const FormLabel = styled.label`
  color: blue;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  border-style: solid;
  border-color: green;
  border-width: 2px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

export const FormEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin: 10px;
`;
