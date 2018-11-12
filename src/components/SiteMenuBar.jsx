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
  MenuLink,
} from './SiteMenuBar.style'

const boolToNum = x => (x ? 1 : 0)

const SiteMenuBar = ({ location: { pathname } }) => {
  const isActive = _.compose(
    boolToNum,
    _.equals(pathname),
  )

  const MenuItem = ({ to, children }) => (
    <MenuLink to={to} active={isActive(to)}>
      {children}
    </MenuLink>
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
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
          {/*
          <MenuItem to="/about">About</MenuItem>
          */}
        </Menu>
      </MenuBar>
    </MenuBarContainer>
  )
}

export default SiteMenuBar
