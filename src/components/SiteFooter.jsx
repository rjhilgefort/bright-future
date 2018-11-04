import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pageblockContainer, pageblockOffset } from '../styles/mixins'

export const FooterContainer = styled.div`
    ${pageblockContainer};
`

export const Footer = styled.div`
    ${pageblockOffset};
    display: flex;
    justify-content: center;
`

const FooterContent = () => (
  <FooterContainer>
    <Footer>
      <p>Bright Future Child Enrichment Center ©2018</p>
      <p>COPY RIGHT, BITCHES</p>
    </Footer>
  </FooterContainer>
)

export default FooterContent
