import React from "react";
import Table from "../table";
import { ContestTableTitle } from "./style";
function ContestTable({ contests }) {
  const columns = ["Contest Name", "Subject"];
  const rowData = contests.map((element) => {
    return [element.contestName, element.subject];
  });
  return (
    <div>
      <ContestTableTitle>Contest overlap</ContestTableTitle>
      
      <Table columns={columns} tableBody={rowData} />
    </div>
  );
}

export default ContestTable;
