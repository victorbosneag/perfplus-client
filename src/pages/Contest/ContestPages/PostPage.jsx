import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getpost } from "../../../api/getpost.api";
import { PageContainer, PostTitle } from "./PostPage.style";
import Markdown from "markdown-to-jsx";

function PostPage() {
  const { postid } = useParams();
  const [content, setContent] = useState({body:"Loading"})
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await getpost(postid);
      setContent(response)
    }
    fetchData();
  },[postid])
  console.log(content)
  return (
    <PageContainer>
      
      <PostTitle>{content.title}</PostTitle>
      <Markdown>{content.body}</Markdown>
    </PageContainer>
  );
}

export default PostPage;
