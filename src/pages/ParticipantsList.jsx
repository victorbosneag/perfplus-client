import React from "react";
import Table from "../components/table";
import SelectComponent from "../components/customSelect";
import { FilterContainer, PageContainer } from "./ParticipantsList.style";
const columns = ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5"];
const tableBody = [
  ["Dummy 1", "Dummy 2", "", "Dummy 1B"],
  ["Dummy 3", "Dummy 4", "Dummy 5"],
];
const data = [
  {
    id: "1",
    name: "One",
    
  },
  {
    id: "2",
    name: "Two",
    
  },
  {
    id: "3",
    name: "Three",
    
  },
  {
    id: "4",
    name: "Four",
    
  },
];
let selectionValue = "All";
function onSelectChange(event) {
  selectionValue=event.selection;
  console.log(selectionValue);
}
function ParticipantsList() {
  //use state and use effect for contest data
  return (
    <PageContainer>
      <FilterContainer>
        <SelectComponent
          data={data}
          onSelectChange={onSelectChange}
          fieldName={"Test"}
        />
      </FilterContainer>

      <Table columns={columns} tableBody={tableBody} />
    </PageContainer>
  );
}

export default ParticipantsList;
