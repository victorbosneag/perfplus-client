import styled from "styled-components";
import {Link} from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 15px;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px;
  align-items: center;
  justify-content: center;
`;


export const AboutButton = styled(Link)`
  display: flex;
  border-style: solid;
  border-color: ${props => props.theme.defaultFont};
  color: ${props => props.theme.links};
  background-color: ${props => props.theme.accent1};
  border-radius: 15px;
  padding: 25px;
  text-decoration: none;
  font-size: xxx-large;
  font-weight: bolder;
  height: fit-content;
`;