import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LoginContext } from "../../App";
import Option from "../../components/optionBar";
import Login from "../Login";
import AddParticipants from "./AddParticipants";
import ContestCreate from "./ContestCreate";
import ContestInfo from "./ContestInfo";
import ContestList from "./ContestList";

export const ContestContext = createContext(false);

function ContestPage() {
  const [contestSelected, setContestSelected] = useState(0);
  const isSignIn = useContext(LoginContext).isSignIn;
  const location = useLocation();
  let leftLinks = [{ route: "/contest/list", title: "List" }];
  let rightLinks = [{ route: "/contest/create", title: "Create Contest" }];
  let contestLeftLinks = [];
  const contestRightLinks = (contestId) => {

    return [{ route: contestId + "/register", title: "Register Participants" }];
  };
  useEffect(() => {
    setContestSelected(0);
  }, [setContestSelected, location]);
  return (
    <ContestContext.Provider value={{ contestSelected, setContestSelected }}>
      <Option
        leftLinks={
          contestSelected>0 ? leftLinks.concat(contestLeftLinks) : leftLinks
        }
        rightLinks={
          isSignIn
            ? contestSelected>0
              ? rightLinks.concat(contestRightLinks(contestSelected))
              : rightLinks
            : []
        }
      />

      <Routes>
        <Route path="list" element={<ContestList />} />
        <Route path=":id" element={<ContestInfo />} />
        <Route path=":id/register" element={<AddParticipants />} />
        <Route
          path="create"
          element={isSignIn ? <ContestCreate /> : <Login />}
        />
      </Routes>
    </ContestContext.Provider>
  );
}

export default ContestPage;
