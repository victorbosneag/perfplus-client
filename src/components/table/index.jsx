import React from 'react'
import { TableBorder, TableEntry, TableHeading, TableHeadStyled, TableRowStyled, TableStyled, } from './style'

function Table (props) {
  let count = 0
  return (
    <TableBorder>
      <TableStyled height={props.height}>
        <TableHeadStyled>
          <TableRowStyled>
            <TableHeading></TableHeading>
            {props.columns.map((columnName) => {
              return <TableHeading>{columnName}</TableHeading>
            })}
          </TableRowStyled>
        </TableHeadStyled>
        <tbody>
        {props.tableBody.map((rowData) => {
          count += 1
          return (
            <TableRowStyled>
              <TableEntry>{count}</TableEntry>
              {rowData.map((tableEntry) => {
                return <TableEntry>{tableEntry}</TableEntry>
              })}
            </TableRowStyled>
          )
        })}
        </tbody>
      </TableStyled>
    </TableBorder>
  )
}

export default Table
