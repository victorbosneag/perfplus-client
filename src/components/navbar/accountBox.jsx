import React from "react";
import { useContext } from "react";
import { LoginContext } from "../../App";
import { LinkContainer, NavbarLink } from "./style";

function NavbarAccount(props) {
  const isSignIn = useContext(LoginContext).isSignIn;
  if (!isSignIn) {
    return (
      <LinkContainer extendedNavbar={props.extended}>
        <NavbarLink to="/login">Sign In</NavbarLink>
        <NavbarLink to="/signup">Sign Up</NavbarLink>
      </LinkContainer>
    );
  } else {
    return (
      <LinkContainer extendedNavbar={props.extended}>
        <NavbarLink to="/logout">Log Out</NavbarLink>
        <NavbarLink to="/user">Profile Info</NavbarLink>
      </LinkContainer>
    );
  }
}

export default NavbarAccount;
