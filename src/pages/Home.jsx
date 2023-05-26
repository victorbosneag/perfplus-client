import React, {useEffect, useState} from 'react';
import {AboutButton, LogoContainer, PageContainer, TableContainer} from "./Home.style";
import {listContest} from "../api/contestlist.api";
import Table from "../components/table";
import {TitleContainer} from "./Contest/ContestPage.style";
import {LoginTitle} from "../components/formBox/style";
import {useNavigate} from "react-router-dom";

function Home(props) {
  const [tableBody, setTableBody] = useState([])
  const urlRoot = "contest/"
  let navigate = useNavigate();
  useEffect(() => {
    return () => {
      const contestPage = window.location.pathname.indexOf(urlRoot) > -1;
      if (!contestPage) {
        props.setOptionBar(<></>)
      }
    };
  }, []);
  const columns = [
    'ID',
    'Name',
    'Subject',
    'Date',
    'Is Active?',
    'Ministry Ack',
    'Created By',
  ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRaw = await listContest()
        const response = responseRaw.data;
        const parsedContestData = response.map((contestEntry) => {
          return {
            id: contestEntry.id,
            contestName: contestEntry.contestName,
            subject: contestEntry.subject,
            date: contestEntry.date,
            isActive: contestEntry.isActive ? 'Yes' : 'No',
            ackMinister: contestEntry.ackMinister ? 'Yes' : 'No',
            username: contestEntry.username,
          }
        })
        const contestList = parsedContestData.map((contestEntry) => {
          //console.log(contestEntry)
          let contestData = []
          for (let key in contestEntry) {
            if (contestEntry.hasOwnProperty(key)) {
              contestData.push(contestEntry[key])
            }
          }
          //console.log(contestData)
          return contestData
        })
        setTableBody(contestList.slice(0, 5))
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (
    <PageContainer>
      <LogoContainer>
        <img alt="logo" src={"http://localhost:3000/logo.png"}/>
        <AboutButton to="/about">About Apex Olympix</AboutButton>
      </LogoContainer>
      <TableContainer>
        <TitleContainer>
          <LoginTitle>Next upcoming 5 contests</LoginTitle>
        </TitleContainer>
        <Table columns={columns} tableBody={tableBody}/>
      </TableContainer>

    </PageContainer>
  );
}

export default Home;