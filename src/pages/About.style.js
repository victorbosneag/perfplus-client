import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f1f1f1;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: #f1f1f1;
  font-size: x-large;
  margin: 30px;
  line-height: 40px;
  color: ${props => props.theme.accent1};
`;