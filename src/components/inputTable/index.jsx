import React from "react";
import { useState } from "react";
import Table from "../table";
import { CustomContainer, NewFormInput } from "./style";

function InputTable(props) {
  const columns = props.columns;
  const columnIds = props.columnIds;
  const tableColumns = props.columns.concat([""]);
  const [tableBodyContent, setTableBodyContent] = useState([]);
  const handleRowAdd = () => {
    let ok = true;
    inputRowValues.forEach((element) => {
      if (element) {
        if (!element.length > 0) {
          ok = false;
        }
      } else {
        ok = false;
      }
    });
    if (ok) {
      setTableBodyContent(tableBodyContent.concat([inputRowValues]));
    } else {
      alert("No blanks allowed");
      return false;
    }
    inputRowValues = columns.map(() => {
      return undefined;
    });
  };
  let inputRowValues = columns.map(() => {
    return undefined;
  });
  const updateTempValues = (index, value) => {
    inputRowValues[index] = value;
  };

  const inputRowBoxes = columns
    .map((columnName, index) => {
      return (
        <NewFormInput
          name={columnName}
          onChange={(event) => {
            const inputValue = event.target.value;
            updateTempValues(index, inputValue);
          }}
          type="text"
        />
      );
    })
    .concat([
      <button
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          handleRowAdd();
        }}
      >
        Add
      </button>,
    ]);
  const tableBody = tableBodyContent.concat([inputRowBoxes]);
  const contentValues = tableBodyContent.map((element)=>{
    let row = {};
    element.forEach((entry, index)=>{
      row[columnIds[index]] = entry;
    })
    return row;
  })
  console.log(contentValues)
  return (
    <CustomContainer>
      <input type="hidden" name="participants" value={JSON.stringify(contentValues)}></input>
      <Table columns={tableColumns} tableBody={tableBody} />
    </CustomContainer>
  );
}

export default InputTable;
