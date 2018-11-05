import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import * as _ from 'ramda'
import BrightFutureImage from './BrightFutureImage'
import {
  MenuBarContainer,
  MenuBar,
  LogoContainer,
  Menu,
  MenuItem,
} from './SiteMenuBar.style'

const boolToNum = x => (x ? 1 : 0)

const SiteMenuBar = ({ location: { pathname } }) => {
  const isActive = _.compose(
    boolToNum,
    _.equals(pathname),
  )

  return (
    <MenuBarContainer>
      <MenuBar>
        <LogoContainer>
          <Link to="/">
            <BrightFutureImage />
          </Link>
        </LogoContainer>

        <Menu>
          <MenuItem to="/" active={isActive('/')}>
            Home
          </MenuItem>
          {/*
          <MenuItem to="/about" active={isActive('/about')}>
            About
          </MenuItem>
          <MenuItem to="/contact" active={isActive('/contact')}>
            Contact
          </MenuItem>
          */}
        </Menu>
      </MenuBar>
    </MenuBarContainer>
  )
}

export default SiteMenuBar
