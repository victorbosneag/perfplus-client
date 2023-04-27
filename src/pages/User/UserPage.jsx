import React from "react";
import { SidebarContentContainer } from "../Contest/ContestInfo.style";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Route, Routes } from "react-router-dom";
import UserInfo from "./UserInfo";
function UserPage() {
  return (
    <SidebarContentContainer>
      <Sidebar>
        <Menu>
          <MenuItem>Registered participants</MenuItem>
          <MenuItem>Change password</MenuItem>
        </Menu>
      </Sidebar>
      <Routes>
        <Route index element={<UserInfo />} />
      </Routes>
    </SidebarContentContainer>
  );
}

export default UserPage;
