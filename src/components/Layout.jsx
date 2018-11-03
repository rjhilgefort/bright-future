import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import SiteMetadata from './SiteMetadata'
import BrightFutureImage from './BrightFutureImage'
import SiteHeader from './SiteHeader'
import SiteContent from './SiteContent'
import * as S from './Layout.style'

const Layout = ({ location, children }) => (
  <React.Fragment>
    <SiteMetadata />

    <SiteHeader location={location} />

    <SiteContent>{children}</SiteContent>

    <S.FooterContainer>
      <S.Footer>
        <p>Bright Future Child Enrichment Center ©2018</p>
        <p>COPY RIGHT, BITCHES</p>
      </S.Footer>
    </S.FooterContainer>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
