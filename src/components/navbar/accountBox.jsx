import React from "react";
import { LinkContainer, NavbarLink } from "./style";
function NavbarAccount(props) {
  return (
    <LinkContainer extendedNavbar={props.extended}>
      <NavbarLink to="/login">Sign In</NavbarLink>
      <NavbarLink to="/signup">Sign Up</NavbarLink>
    </LinkContainer>
  );
}

export default NavbarAccount;
