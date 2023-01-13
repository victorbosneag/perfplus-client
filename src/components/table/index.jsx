import React from "react";
import {
  TableContainer,
  TableHeadStyled,
  TableStyled,
  TableRowStyled,
  TableEntry,
} from "./style";

function Table(props) {
  return (
    <TableContainer>
      <TableStyled>
        <TableHeadStyled>
          <TableRowStyled>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </TableRowStyled>
        </TableHeadStyled>
        <tbody>
          <TableRowStyled>
            <TableEntry>Entry 11</TableEntry>
            <TableEntry>Entry 12</TableEntry>
            <TableEntry>Entry 13</TableEntry>
          </TableRowStyled>
          <TableRowStyled>
            <TableEntry>Entry 21</TableEntry>
            <TableEntry>Entry 22</TableEntry>
            <TableEntry>Entry 23</TableEntry>
          </TableRowStyled>
          <TableRowStyled>
            <TableEntry>Entry 31</TableEntry>
            <TableEntry>Entry 32</TableEntry>
            <TableEntry>Entry 33</TableEntry>
          </TableRowStyled>
        </tbody>
      </TableStyled>
    </TableContainer>
  );
}

export default Table;
