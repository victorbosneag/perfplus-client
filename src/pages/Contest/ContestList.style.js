import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  padding: 50px;
  box-sizing: border-box;
`;

export const ContestPageLink = styled(Link)`
  font-size: 18px;
  border-style: solid;
  background-color: greenyellow;
  border-radius: 5px;
  border-width: 4px;
  color: black;
  padding:5px;
  text-decoration: none;
`;