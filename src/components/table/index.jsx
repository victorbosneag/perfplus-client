import React from "react";
import {
  TableHeadStyled,
  TableStyled,
  TableRowStyled,
  TableEntry,
  TableBorder,
  TableHeading,
} from "./style";

function Table(props) {
  return (
    <TableBorder>
      <TableStyled>
        <TableHeadStyled>
          <TableRowStyled>
            {props.columns.map((columnName) => {
              return <TableHeading>{columnName}</TableHeading>;
            })}
          </TableRowStyled>
        </TableHeadStyled>
        <tbody>
          {props.tableBody.map((rowData) => {
            return (
              <TableRowStyled>
                {rowData.map((tableEntry) => {
                  return <TableEntry>{tableEntry}</TableEntry>;
                })}
              </TableRowStyled>
            );
          })}
        </tbody>
      </TableStyled>
    </TableBorder>
  );
}

export default Table;
