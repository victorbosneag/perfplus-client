import React, { useEffect, useState } from "react";
import { StyledSelect } from "./style";

function SelectComponent(props) {
  const data = props.data;
  const fieldName = props.fieldName;
  const [selectedData, updateSelectedData] = useState("All");
  const onSelectChange = props.onSelectChange;
  useEffect(() => {
    if (onSelectChange) {
      onSelectChange({ selection: selectedData, name: fieldName });
    }
  }, [selectedData, onSelectChange, fieldName]);

  const handleChange = (event) => {
    if (event.target.value === fieldName) {
      updateSelectedData("All");
    } else {
      updateSelectedData(event.target.value);
    }
  };
  return (
    <StyledSelect name={fieldName} onChange={handleChange}>
      <option>{fieldName}</option>
      <option key="All" value="All">
        All
      </option>
      {data.map((data) => {
        return (
          <option key={data.name} value={data.name}>
            {data.name}
          </option>
        );
      })}
    </StyledSelect>
  );
}

export default SelectComponent;
