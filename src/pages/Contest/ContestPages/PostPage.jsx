import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getpost } from "../../../api/getpost.api";
import { PageContainer, PostTitle } from "./PostPage.style";

function PostPage() {
  const { postid } = useParams();
  const [content, setContent] = useState({})
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await getpost(postid);
      setContent(response)
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <PageContainer>
      
      <PostTitle>{content.title}</PostTitle>
    </PageContainer>
  );
}

export default PostPage;
