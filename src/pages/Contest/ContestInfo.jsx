import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { findContest } from "../../api/contestfind.api";
import ParticipantsList from "../ParticipantsList";
import { SidebarContentContainer } from "./ContestInfo.style";
import { ContestContext } from "./ContestPage";
import { PageContainer } from "./ContestPage.style";
import { StyledTitle, TitleContainer } from "./ContestPage.style";
import {
  Sidebar,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { getConfig } from "../../api/getconfig.api";

function ContestInfo() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [subject, setSubject] = useState("None");
  const [createdBy, setCreatedBy] = useState("None");
  const [contestMenus, setContestMenus] = useState([]);
  const setContestSelected = useContext(ContestContext).setContestSelected;

  useEffect(() => {
    const fetchData = async () => {
      const responseContest = await findContest(id);
      setName(responseContest.contestName);
      setDate(responseContest.date);
      setSubject(responseContest.subject);
      setCreatedBy(responseContest.username);
      const responseConfig = await getConfig(id);
      let displayRoutes = []
      if(responseConfig.hasAnswers){
        displayRoutes.push({name: "Answers", route: "answers"})
      }
      if(responseConfig.hasSubjects){
        displayRoutes.push({name: "Subjects", route: "subjects"})
      }
      setContestMenus(displayRoutes)
    };
    fetchData();
    setContestSelected(id);
  }, [id, setContestSelected]);

  return (
    <SidebarContentContainer>
      <Sidebar>
        <Menu>
        {contestMenus.map(element=>{
            return <MenuItem component={<Link to={element.route} />}>{element.name}</MenuItem>
          })
          }
         
        </Menu>
      </Sidebar>
      <PageContainer>
        <TitleContainer>
          <StyledTitle>{name}</StyledTitle>
          <h3>Subject: {subject}</h3>
          <p>Contest date: {date}</p>
          <p>Created by: {createdBy}</p>
        </TitleContainer>
        <ParticipantsList contest={name} />
      </PageContainer>
    </SidebarContentContainer>
  );
}

export default ContestInfo;
