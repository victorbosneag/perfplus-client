import React, { useEffect, useState } from "react";

import SelectComponent from "../components/customSelect";
import { FilterContainer, PageContainer } from "./ParticipantsList.style";
import { getContest } from "../api/contestget.api";

import ParticipantsTable from "../components/participantTable";

function ParticipantsList() {
  const columns = ["ID", "First Name", "Last Name", "Result", "Award"];
  //use state and use effect for contest data
  const [dataContest, setData] = useState([]);
  const [selectionContest, setSelectionContest] = useState("All");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContest();
        const contestList = response.map((contestEntry) => {
          return {
            id: contestEntry.id,
            name: contestEntry.contestName,
          };
        });
        console.log(response);
        setData(contestList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function onSelectChange(event) {
    setSelectionContest(event.selection);
  }

  return (
    <PageContainer>
      <FilterContainer>
        <SelectComponent
          data={dataContest}
          onSelectChange={onSelectChange}
          fieldName={"Contest"}
          defaultValue={selectionContest}
        />
      </FilterContainer>

      <ParticipantsTable
        columns={columns}
        selectionContest={selectionContest}
      />
    </PageContainer>
  );
}

export default ParticipantsList;
