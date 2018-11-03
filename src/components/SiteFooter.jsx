import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'

const { Footer } = Layout

const FooterSC = styled(Footer)`
  text-align: center;
  background-color: white;
`

const SiteFooter = () => (
  <FooterSC>Bright Future Child Enrichment Center ©2018</FooterSC>
)

export default SiteFooter
