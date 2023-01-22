import React, { useState } from "react";
import NavbarAccount from "./accountBox";
import NavbarLinks from "./links";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  OpenLinksButton,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarAccountContainer,
  DropdownLinkContainer,
} from "./style";
function Navbar() {
  const [extendedNavbar, setExtendedNavbar] = useState(false);
  return (
    <NavbarContainer extendedNavbar={extendedNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLinks extended={false} />
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendedNavbar((curr) => !curr);
            }}
          >
            {extendedNavbar ? <>&#10005;</> : <>&#8801;</>}
          </OpenLinksButton>
          <NavbarAccountContainer>
            <NavbarAccount extended={false} />
          </NavbarAccountContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendedNavbar && (
        <NavbarExtendedContainer>
          <DropdownLinkContainer>
            <NavbarLinks extended={true} />
            <NavbarAccount extended={true} />
          </DropdownLinkContainer>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
