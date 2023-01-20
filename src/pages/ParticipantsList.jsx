import React, { useEffect, useState } from "react";
import Table from "../components/table";
import SelectComponent from "../components/customSelect";
import { FilterContainer, PageContainer } from "./ParticipantsList.style";
import { getContest } from "../api/contestget.api";
import { getParticipant } from "../api/participantget.api";



function ParticipantsList() {
  const columns = ["ID", "First Name", "Last Name", "Result", "Award"];
  //use state and use effect for contest data
  const [dataContest, setData] = useState([]);
  const [selectionContest, setSelectionContest] = useState("All");
  const [tableBody, setTableBody] = useState([]);
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
  //on filter change
  useEffect(() => {
    const fetchData = async () =>{
      try{
        const response = await getParticipant(selectionContest);
        const participantList = response.data.map((participantEntry)=>{
          let participantData=[];
          for(let key in participantEntry){
            if(participantEntry.hasOwnProperty(key)){
              participantData.push(participantEntry[key]);
            }
          }
          participantData = participantData.slice(0, 5);
          return participantData;
        })
        setTableBody(participantList);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData();
  }, [selectionContest]);
  
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
        />
      </FilterContainer>

      <Table columns={columns} tableBody={tableBody} />
    </PageContainer>
  );
}

export default ParticipantsList;
