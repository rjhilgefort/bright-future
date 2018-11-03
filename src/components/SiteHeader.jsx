import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout, Menu, Row, Col } from 'antd'
import BrightFutureImage from './BrightFutureImage'

const { Header } = Layout

const logoSize = 80;

const HeaderSC = styled(Header)`
  background-color: white;
  height: 100%;
  z-index: 500;
  border-bottom: 1px solid black;
`
const MenuSC = styled(Menu)`
  margin-top: ${logoSize - 40}px;
  border-bottom: none;
  float: right;
  z-index: 500;
`
const MenuItemSC = styled(Menu.Item)``

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
      <Col offset={14} span={4}>
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
