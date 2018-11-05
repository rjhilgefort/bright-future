import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import * as _ from 'ramda'
import BrightFutureImage from './BrightFutureImage'
import * as S from './SiteHeader.style'

const boolToNum = x => (x ? 1 : 0)

const SiteHeader = ({ location: { pathname } }) => {
  const isActive = _.compose(
    boolToNum,
    _.equals(pathname),
  )

  return (
    <S.HeaderContainer>
      <S.Header>
        <S.LogoContainer>
          <Link to="/">
            <BrightFutureImage />
          </Link>
        </S.LogoContainer>

        <S.Menu>
          <S.MenuItem to="/" active={isActive('/')}>
            Home
          </S.MenuItem>
          <S.MenuItem to="/about" active={isActive('/about')}>
            About
          </S.MenuItem>
          <S.MenuItem to="/contact" active={isActive('/contact')}>
            Contact
          </S.MenuItem>
        </S.Menu>
      </S.Header>
    </S.HeaderContainer>
  )
}

export default SiteHeader
