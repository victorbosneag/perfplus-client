import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getposts } from "../../../api/getposts.api";
import Table from "../../../components/table";
import { Line, PostContainer, PostLink, PostTitle } from "./ContestPosts.style";
import PostPage from "./PostPage";

function ContestPosts(props) {
  const [tableData, setTableData] = useState([]);
  const contestId = props.contest;
  const columnData = ["Title", "Type"];
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await getposts(contestId);
        const responseArray = response.map((element)=>{
          return [<PostLink to={''+element["id"]}>{element["title"]}</PostLink>, element["type"]]
        })
        setTableData(responseArray)
      }
      catch(err){
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PostContainer>
      <PostTitle>Posts</PostTitle>
      <Table columns={columnData} tableBody={tableData} height="300px"/>
      <Line />
      <Routes>
        <Route path=":postid" element={<PostPage />} />
      </Routes>
    </PostContainer>
  )
}

export default ContestPosts;
