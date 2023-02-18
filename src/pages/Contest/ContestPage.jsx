import React from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginContext } from "../../App";
import Option from "../../components/optionBar";
import Login from "../Login";
import ContestCreate from "./ContestCreate";
import ContestInfo from "./ContestInfo";
import ContestList from "./ContestList";

function ContestPage() {
  const isSignIn = useContext(LoginContext).isSignIn;
  const leftLinks = [
    {route: "/contest/list", title: "List"},
  ]
  const rightLinks = [
    {route: "/contest/create", title: "Create Contest"},
    {route: "/", title: "Test5"},
    {route: "/", title: "Test6"}
  ]
  return (
    <div>
      
      <Option leftLinks={leftLinks} rightLinks={isSignIn?rightLinks:[]} />

      <Routes>
        <Route path="list" element={<ContestList />} />
        <Route path=":id" element={<ContestInfo />} />
        <Route path="create" element={isSignIn? <ContestCreate />: <Login />} />
      </Routes>
      
    </div>
  );
}

export default ContestPage;
