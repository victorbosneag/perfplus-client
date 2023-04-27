import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { getParticipant } from "../../api/participantget.api";
import { ParticipantDataContext } from "../../App";
import Table from "../table";

import { PageContainer } from "./style";
function ParticipantsTable(props) {
  let columns = props.columns;
  let selectionContest = props.selectionContest;
  let selectionHighSchool = props.selectionHighSchool;
  let selectionPage = props.selectionPage;
  let selectionItems = props.selectionItems;

  let contestList = useContext(ParticipantDataContext);
  
  
  //const columns = ["ID", "First Name", "Last Name", "Result", "Award"];
  //use state and use effect for contest data
  //const [dataContest, setData] = useState([]);
  //const [selectionContest, setSelectionContest] = useState("All");
  const [tableBody, setTableBody] = useState([]);
  //on filter change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getParticipant(
          selectionContest,
          selectionHighSchool,
          selectionPage,
          selectionItems
        );
        const participantList = response.data.map((participantEntry) => {
          let participantData = [];
          for (let key in participantEntry) {
            if (participantEntry.hasOwnProperty(key)) {
              participantData.push(participantEntry[key]);
            }
          }
          participantData = participantData.slice(0, 5).concat(participantData[9]);
          
          return participantData;
        });
        setTableBody(participantList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [selectionContest, selectionHighSchool, selectionPage, selectionItems, contestList]);

  return (
    <PageContainer>
      <Table columns={columns} tableBody={tableBody} />
    </PageContainer>
  );
}

export default ParticipantsTable;
