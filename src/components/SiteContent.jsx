import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pageblockContainer, pageblockOffset } from '../styles'

export const ContentContainer = styled.div`
  ${pageblockContainer};
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
