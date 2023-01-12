import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarExtendedContainer,
  NavbarLinkExtended,
} from "./style";
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

          <NavbarLink to="/login">Sign In</NavbarLink>
          <NavbarLink to="/signup">Sign Up</NavbarLink>
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
