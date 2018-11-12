import React, { Fragment } from 'react'
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
  <Fragment>
    <SiteMetadata />

    <SiteHeaderBar />
    <SiteMenuBar location={location} />

    <SiteContent>{children}</SiteContent>

    <SiteFooter />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
