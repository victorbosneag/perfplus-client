import React from "react";
import { SidebarContentContainer } from "../Contest/ContestInfo.style";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Route, Routes } from "react-router-dom";
import UserInfo from "./UserInfo";
import RegisteredParticipants from "./RegisteredParticipants";
import { Link } from "react-router-dom";

function UserPage() {
  return (
    <SidebarContentContainer>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to={"participants"} />}
          >Registered participants</MenuItem>
          <MenuItem>Change password</MenuItem>
        </Menu>
      </Sidebar>
      <Routes>
        <Route index element={<UserInfo />} />
        <Route path="participants" element={<RegisteredParticipants />} />
      </Routes>
    </SidebarContentContainer>
  );
}

export default UserPage;
