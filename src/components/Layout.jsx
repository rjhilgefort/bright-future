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
const HeaderThing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 2rem);
  max-width: 1000px;
  padding: 1rem 1rem 0rem 1rem;
`

const MenuSC = styled(Menu)`
  margin-top: 5px;
  border-bottom: none;
  z-index: 500;
  align-self: flex-end;
`
const MenuItemSC = styled(Menu.Item)``

const ContentThing = styled.div`
  display: block;
  margin: 0 auto;
  width: calc(100% - 2rem);
  max-width: 1000px;
  padding: 100px 1rem 0rem 1rem;
`

const TossedBitch = styled.div`
  background-color: blue;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
`

const TheFoot = styled.div`
  display: flex;
  width: calc(100% - 2rem);
  max-width: 1000px;
  padding: 1rem 1rem 0rem 1rem;
  justify-content: center;
`

const FootBitch = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Layout = ({ children }) => (
  <>
    <SiteMetadata />
    <TossedBitch>
      <HeaderThing>
        <LogoContainer>
          <Link to="/">
            <BrightFutureImage />
          </Link>
        </LogoContainer>
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
      </HeaderThing>
    </TossedBitch>
    <ContentThing> {children} </ContentThing>
    <FootBitch>
      <TheFoot>
        <p>Bright Future Child Enrichment Center ©2018</p>
        <p>COPY RIGHT, BITCHES</p>
      </TheFoot>
    </FootBitch>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
