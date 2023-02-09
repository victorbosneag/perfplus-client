import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { listContest } from "../api/contestlist.api";
import Table from "../components/table";
import { PageContainer } from "./ContestList.style";

function ContestList() {
  const [tableBody, setTableBody] = useState([]);
  const columns = [
    "ID",
    "Name",
    "Subject",
    "Date",
    "Is Active?",
    "Ministry Ack",
    "Created By",
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRaw = await listContest();
        const response = responseRaw.data;
        const parsedContestData = response.map((contestEntry) => {
          return {
            id: contestEntry.id,
            contestName: contestEntry.contestName,
            subject: contestEntry.subject,
            date: contestEntry.date,
            isActive: contestEntry.isActive ? "Yes" : "No",
            ackMinister: contestEntry.ackMinister ? "Yes" : "No",
            userid: contestEntry.userid,
          };
        });
        const contestList = parsedContestData.map((contestEntry) => {
          console.log(contestEntry);
          let contestData = [];
          for (let key in contestEntry) {
            if (contestEntry.hasOwnProperty(key)) {
              contestData.push(contestEntry[key]);
            }
          }
          console.log(contestData);
          return contestData;
        });
        setTableBody(contestList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    
      <PageContainer>
        <Table columns={columns} tableBody={tableBody} />
      </PageContainer>
    
  );
}

export default ContestList;
