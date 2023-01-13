import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
`;

export const TableStyled = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 22px;
  font-family: sans-serif;
  min-width: 400px;
  border-style: solid;
  padding: 10px;
`;

export const TableHeadStyled = styled.thead`
  background: pink;
  
`;

export const TableRowStyled = styled.tr`
  margin-bottom:20px;
  border-bottom: 1px solid #dddddd;
`;
export const TableEntry = styled.td`
  
  padding: 12px 15px;
`;