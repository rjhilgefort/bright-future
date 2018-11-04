import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pageblockContainer, pageblockOffset } from '../styles/mixins'

export const ContentContainer = styled.div`
  ${pageblockContainer};
  margin-top: 40px;
`

export const Content = styled.div`
  ${pageblockOffset};
`

const SiteContent = ({ children }) => (
  <ContentContainer>
    <Content>{children}</Content>
  </ContentContainer>
)

SiteContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteContent
