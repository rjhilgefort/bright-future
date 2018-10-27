import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Layout as LayoutAntd, Menu } from 'antd'
import 'antd/dist/antd.css'
import BrightFutureImage from './BrightFutureImage'

const { Header, Content, Footer } = LayoutAntd

const HeaderSC = styled(Header)`
  position: fixed;
  zindex: 1;
  width: 100%;
`
const MenuSC = styled(Menu)`
  margin-top: 8px;
`
const MenuItemSC = styled(Menu.Item)``

const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  margin: 0px 30px 0px 0px;
  float: left;
`
const ContentSC = styled(Content)`
  padding: 5px 50px;
  margin-top: 64px;
  min-height: 300px;
  background-color: white;
`
const FooterSC = styled(Footer)`
  text-align: center;
`

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Bright Future"
      meta={[
        {
          name: 'description',
          content: 'Bright Future Child Enrichment Center',
        },
        { name: 'keywords', content: 'daycare, child, children, babysit' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <LayoutAntd>
      <HeaderSC>
        <LogoContainer>
          <BrightFutureImage />
        </LogoContainer>
        <MenuSC theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <MenuItemSC key="1">Home</MenuItemSC>
        </MenuSC>
      </HeaderSC>
      <ContentSC>{children}</ContentSC>
      <FooterSC>Bright Future Child Enrichment Center ©2018</FooterSC>
    </LayoutAntd>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
