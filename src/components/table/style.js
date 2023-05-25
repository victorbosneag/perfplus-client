import styled from 'styled-components'

export const TableBorder = styled.div`

  border-radius: 15px;
  border-color: green;
  border-style: solid;
  border-width: 4px;
  overflow: hidden;
  white-space: nowrap;
  width: fit-content;


`
export const TableStyled = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  min-width: 300px;
  max-width: 90vw;
  width: 100%;
  height: ${(props) => (props.height ? props.height : 'fit-content')};
  overflow-x: auto;
  overflow-y: auto;

  th, td {
    word-wrap: break-word;
  }
`

export const TableHeadStyled = styled.thead`
  background: green;

`

export const TableRowStyled = styled.tr`

  border-bottom: 1px solid #dddddd;
`
export const TableEntry = styled.td`
  font-size: 18px;
  padding: 12px 15px;
  text-align: left;
  border-right: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  min-width: 100px;
`
export const TableHeading = styled.th`
  font-size: 22px;
  padding: 12px 15px;
  color: white;
  text-align: left;
`