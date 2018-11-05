import React from 'react'
import {
  HeaderBarContainer,
  HeaderBar,
  Item,
  Contact,
  ContactButton,
  SocialIcon,
} from './SiteHeaderBar.style'

const HeaderBarContent = () => (
  <HeaderBarContainer>
    <HeaderBar>
      <Item>Bright Future Child Enrichment Center</Item>
      <Contact>
        <ContactButton icon="mail">brightfuturecec@gmail.com</ContactButton>
        <ContactButton icon="phone">+1 (859) 341-3350</ContactButton>
        <SocialIcon type="facebook" theme="filled" />
        <SocialIcon type="twitter" />
      </Contact>
    </HeaderBar>
  </HeaderBarContainer>
)

export default HeaderBarContent
