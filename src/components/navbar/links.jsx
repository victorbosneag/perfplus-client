import React, { useContext } from "react";
import { LinkContainer, NavbarLink } from "./style";
import { LoginContext } from "../../App";
function NavbarLinks(props) {
  const isSignIn = useContext(LoginContext).isSignIn;
  return (
    
    <LinkContainer extendedNavbar={props.extended}>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/participants">Participants</NavbarLink>
      <NavbarLink to="/contestlist">Contests</NavbarLink>
      
      {isSignIn ? <NavbarLink to="/newcontest">Create Contest</NavbarLink> : <></>}
    </LinkContainer>
  );
}

export default NavbarLinks;
