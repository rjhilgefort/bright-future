import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout, Menu, Row, Col } from 'antd'
import BrightFutureImage from './BrightFutureImage'

const { Header } = Layout

const logoSize = 100;

const HeaderSC = styled(Header)`
  background-color: white;
  height: 100%;
  z-index: 500;
`
const MenuSC = styled(Menu)`
  margin-top: ${logoSize * .35}px;
  border-bottom: none;
  float: right;
  z-index: 500;
  font-size: ${logoSize * .25}px;
`
const MenuItemSC = styled(Menu.Item)`
  > a {
    padding-bottom: ${logoSize * .25}px;
  }
`

const LogoContainer = styled.div`
  width: ${logoSize}px;
  height: ${logoSize}px;
  margin-top: 5px;
`

const SiteHeader = () => (
  <HeaderSC>
    <Row>
      <Col span={6}>
        <LogoContainer>
          <Link to="/">
            <BrightFutureImage />
          </Link>
        </LogoContainer>
      </Col>
      <Col offset={4} span={14}>
        <MenuSC mode="horizontal" defaultSelectedKeys={['1']}>
          <MenuItemSC key="1">
            <Link to="/">Home</Link>
          </MenuItemSC>
          <MenuItemSC key="2">
            <Link to="/">About</Link>
          </MenuItemSC>
          <MenuItemSC key="3">
            <Link to="/">Contact</Link>
          </MenuItemSC>
        </MenuSC>
      </Col>
    </Row>
  </HeaderSC>
)

export default SiteHeader
