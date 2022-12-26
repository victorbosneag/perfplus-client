import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  OpenLinksButton,
  NavbarExtendedContainer,
  NavbarLinkExtended,
} from "../styles/Navbar.style";
function Navbar() {
  const [extendedNavbar, setExtendedNavbar] = useState(false);
  return (
    <NavbarContainer extendedNavbar={extendedNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLink to="/">Filler</NavbarLink>
          <NavbarLink to="/">Filler</NavbarLink>
          <NavbarLink to="/">Filler</NavbarLink>
        </LeftContainer>
        <RightContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendedNavbar((curr) => !curr);
            }}
          >
            {extendedNavbar ? <>&#10005;</> : <>&#8801;</>}
          </OpenLinksButton>

          <NavbarLink to="/signin">Sign In</NavbarLink>
          <NavbarLink to="/signin">Sign Up</NavbarLink>
        </RightContainer>
      </NavbarInnerContainer>
      {extendedNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Filler</NavbarLinkExtended>
          <NavbarLinkExtended to="/">Filler</NavbarLinkExtended>
          <NavbarLinkExtended to="/">Filler</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
