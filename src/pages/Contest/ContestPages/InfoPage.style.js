import styled from "styled-components";
import { LoginTitle } from "../../../components/formBox/style";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  width: 100%;
`;

export const DocContainer = styled.div`
  min-width: 500px;
  height: 90%;
  margin: 10px;
  justify-content: center;
`;

export const InfoTitle = styled(LoginTitle)`
  text-transform: capitalize;
`;

export const InfoForm = styled.form`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
