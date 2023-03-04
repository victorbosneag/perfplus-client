import React from "react";
import { useState } from "react";
import Table from "../table";
import { CustomContainer, NewFormInput } from "./style";

function InputTable(props) {
  const columns = props.columns;
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
        Test
      </button>,
    ]);
  console.log(inputRowBoxes);
  const tableBody = tableBodyContent.concat([inputRowBoxes]);
  return (
    <CustomContainer>
      <Table columns={tableColumns} tableBody={tableBody} />
    </CustomContainer>
  );
}

export default InputTable;
