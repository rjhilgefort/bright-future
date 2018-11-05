import React from 'react'
import styled from 'styled-components'
import {
  pageblockContainer,
  pageblockOffset,
  whiteOnOrange,
} from '../styles/mixins'

const FooterContainer = styled.div`
  ${pageblockContainer}
  ${whiteOnOrange}
  margin-top: 25px;
`

const Footer = styled.div`
  ${pageblockOffset};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-weight: 600;
`

const Item = styled.div``

const FooterContent = () => (
  <FooterContainer>
    <Footer>
      <Item>Bright Future Child Enrichment Center ©2018</Item>
    </Footer>
  </FooterContainer>
)

export default FooterContent
