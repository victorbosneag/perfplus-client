import React, { useContext } from "react";
import { LinkContainer, NavbarLink } from "./style";
import { LoginContext } from "../../App";
function NavbarLinks(props) {
  // eslint-disable-next-line no-unused-vars
  const isSignIn = useContext(LoginContext).isSignIn;
  return (
    
    <LinkContainer extendedNavbar={props.extended}>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/participants">Participants</NavbarLink>
      <NavbarLink to="/contest/list">Contests</NavbarLink>
    </LinkContainer>
  );
}

export default NavbarLinks;
