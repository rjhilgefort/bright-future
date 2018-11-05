import React from 'react'
import styled from 'styled-components'
import {
  pageblockContainer,
  pageblockOffset,
  whiteOnOrange,
} from '../styles/mixins'

const FooterContainer = styled.div`
  ${pageblockContainer} ${whiteOnOrange}
  margin-top: 20px;
`

const Footer = styled.div`
  ${pageblockOffset};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
`

const Item = styled.div``

const FooterContent = () => (
  <FooterContainer>
    <Footer>
      <Item>Bright Future Child Enrichment Center ©2018</Item>
      <Item>COPY RIGHT, BITCHES</Item>
    </Footer>
  </FooterContainer>
)

export default FooterContent
