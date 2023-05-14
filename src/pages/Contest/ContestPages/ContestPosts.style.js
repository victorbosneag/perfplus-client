import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginTitle } from "../../../components/formBox/style";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  width: 100%;
`;

export const PostTitle = styled(LoginTitle)`
  text-transform: capitalize;
`;

export const PostLink = styled(Link)`
  color: black;
  
`;
