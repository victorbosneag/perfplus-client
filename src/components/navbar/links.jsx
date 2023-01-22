import React from "react";
import { LinkContainer, NavbarLink } from "./style";
function NavbarLinks(props) {
  return (
    <LinkContainer extendedNavbar={props.extended}>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/participants">Participants</NavbarLink>
      <NavbarLink to="/">Filler</NavbarLink>
    </LinkContainer>
  );
}

export default NavbarLinks;
