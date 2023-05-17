import React, { useState } from 'react'

import {
  DropdownLinkContainer,
  LeftContainer,
  LinkContainer,
  NavbarAccountContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  OpenLinksButton,
  RightContainer,
} from '../navbar/style'
import { OptionBarContainer } from './style'

function OptionBar ({ leftLinks, rightLinks }) {
  const [extendedNavbar, setExtendedNavbar] = useState(false)
  return (
    <OptionBarContainer extendedNavbar={extendedNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <LinkContainer extended={false}>
              {leftLinks.map((link) => (
                <NavbarLink to={link.route}>{link.title}</NavbarLink>
              ))}
            </LinkContainer>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendedNavbar((curr) => !curr)
            }}
          >
            {extendedNavbar ? <>&#10005;</> : <>&#8801;</>}
          </OpenLinksButton>
          <NavbarAccountContainer>
            <LinkContainer extended={false}>
              {rightLinks.map((link) => (
                <NavbarLink to={link.route}>{link.title}</NavbarLink>
              ))}
            </LinkContainer>
          </NavbarAccountContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendedNavbar && (
        <NavbarExtendedContainer>
          <DropdownLinkContainer>
            <LinkContainer extendedNavbar={true}>

              {leftLinks.map((link) => (
                <NavbarLink to={link.route}>{link.title}</NavbarLink>
              ))}
              {rightLinks.map((link) => (
                <NavbarLink to={link.route}>{link.title}</NavbarLink>
              ))}
            </LinkContainer>

          </DropdownLinkContainer>
        </NavbarExtendedContainer>
      )}
    </OptionBarContainer>
  )
}

export default OptionBar
