import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { findContest } from "../api/contestfind.api";
import Option from "../components/optionBar";

import { PageContainer } from "./ContestPage.style";
import { StyledTitle, TitleContainer } from "./ContestPage.style";


function ContestPage(routerProps) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [subject, setSubject] = useState("None");
  const [createdBy, setCreatedBy] = useState("None");
  const leftLinks = [
    {route: "/contest/" + id + "/participants", title: "Test1"},
    {route: "/", title: "Test2"},
    {route: "/", title: "Test3"}
  ]
  const rightLinks = [
    {route: "/", title: "Test4"},
    {route: "/", title: "Test5"},
    {route: "/", title: "Test6"}
  ]
  useEffect(() => {
    const fetchData = async () => {
      const response = await findContest(id);
      setName(response.contestName);
      setDate(response.date);
      setSubject(response.subject);
      setCreatedBy(response.username);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      
      <Option leftLinks={leftLinks} rightLinks={rightLinks} />
      <PageContainer>
        <TitleContainer>
          <StyledTitle>{name}</StyledTitle>
          <h3>Subject: {subject}</h3>
          <p>Contest date: {date}</p>
          <p>Created by: {createdBy}</p>
        </TitleContainer>
      </PageContainer>
      
    </div>
  );
}

export default ContestPage;
/*

      
*/