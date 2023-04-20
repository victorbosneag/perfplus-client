import React from "react";
import { useState } from "react";
import Table from "../table";
import { CustomContainer, FileInputContainer, Line, NewFormInput, Subtitle } from "./style";
import { csvParse } from "d3";

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
  const handleFileSubmit = async (event) =>{
    event.preventDefault();
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        const csvText = reader.result;
        const csvRes = csvParse(csvText);
        const csvResArray = csvRes.map((element)=>{
          return Object.values(element)
        })
        console.log(csvResArray)
        setTableBodyContent(csvResArray)
      },
      false
    );
  
    if (selectedFile.type === "text/csv") {
      reader.readAsText(selectedFile);
    }

  
    console.log(selectedFile)
  }
  console.log(contentValues)
  console.log(tableBodyContent)
  return (
    <CustomContainer>
      <input type="hidden" name="participants" value={JSON.stringify(contentValues)}></input>
      <FileInputContainer>
        <Subtitle>Import from file</Subtitle>
        <input type="file" onChange={handleFileSubmit}/>
      </FileInputContainer>
      <Line></Line>
      <Subtitle>Import with table</Subtitle>
      <Table columns={tableColumns} tableBody={tableBody} />
    </CustomContainer>
  );
}

export default InputTable;
