import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Layout as LayoutAntd, Row, Col } from 'antd'
import SiteMetadata from './SiteMetadata'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const { Content } = LayoutAntd

const ContentSC = styled(Content)`
  padding: 100px 30px;
  margin-top: 0px;
  min-height: 400px;
  background-color: white;
`
const Layout = ({ children }) => (
  <>
    <SiteMetadata />
    <Row>
      <Col span={18} offset={3}>
        <LayoutAntd>
          <SiteHeader />
          <ContentSC>{children}</ContentSC>
          <SiteFooter />
        </LayoutAntd>
      </Col>
    </Row>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
