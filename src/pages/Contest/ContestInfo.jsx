import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { findContest } from "../../api/contestfind.api";
import { PageContainer } from "./ContestPage.style";
import { StyledTitle, TitleContainer } from "./ContestPage.style";

function ContestInfo() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [subject, setSubject] = useState("None");
  const [createdBy, setCreatedBy] = useState("None");

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
    <PageContainer>
      <TitleContainer>
        <StyledTitle>{name}</StyledTitle>
        <h3>Subject: {subject}</h3>
        <p>Contest date: {date}</p>
        <p>Created by: {createdBy}</p>
      </TitleContainer>
    </PageContainer>
  );
}

export default ContestInfo;
