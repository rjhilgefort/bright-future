import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout as LayoutAntd, Menu, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import SiteMetadata from './SiteMetadata'
import BrightFutureImage from './BrightFutureImage'

const { Header, Content, Footer } = LayoutAntd

const HeaderSC = styled(Header)`
  background-color: white;
  z-index: 500;
`
const MenuSC = styled(Menu)`
  margin-top: 5px;
  border-bottom: none;
  float: right;
  z-index: 500;
`
const MenuItemSC = styled(Menu.Item)``

const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  margin: 5px 30px 0px 0px;
`
const ContentSC = styled(Content)`
  padding: 150px 50px;
  margin-top: 0px;
  min-height: 400px;
  background-color: white;
`
const FooterSC = styled(Footer)`
  text-align: center;
  background-color: white;
`

const Layout = ({ children }) => (
  <>
    <SiteMetadata />
    <Row>
      <Col span={18} offset={3}>
        <LayoutAntd>
          <HeaderSC>
            <Row>
              <Col span={6}>
                <LogoContainer>
                  <Link to="/">
                    <BrightFutureImage />
                  </Link>
                </LogoContainer>
              </Col>
              <Col offset={14} span={4}>
                <MenuSC mode="horizontal" defaultSelectedKeys={['1']}>
                  <MenuItemSC key="1">
                    <Link to="/">Home</Link>
                  </MenuItemSC>
                  <MenuItemSC key="2">
                    <Link to="/">Blahahahaha</Link>
                  </MenuItemSC>
                  <MenuItemSC key="3">
                    <Link to="/">Contact</Link>
                  </MenuItemSC>
                </MenuSC>
              </Col>
            </Row>
          </HeaderSC>
          <ContentSC>{children}</ContentSC>
          <FooterSC>Bright Future Child Enrichment Center ©2018</FooterSC>
        </LayoutAntd>
      </Col>
    </Row>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
