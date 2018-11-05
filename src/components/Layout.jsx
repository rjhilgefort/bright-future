import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Link } from 'gatsby'
import SiteMetadata from './SiteMetadata'
import BrightFutureImage from './BrightFutureImage'
import SiteHeaderBar from './SiteHeaderBar'
import SiteMenuBar from './SiteMenuBar'
import SiteContent from './SiteContent'
import SiteFooter from './SiteFooter'

const Layout = ({ location, children }) => (
  <React.Fragment>
    <SiteMetadata />

    <SiteHeaderBar />
    <SiteMenuBar location={location} />

    <SiteContent>{children}</SiteContent>

    <SiteFooter />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
