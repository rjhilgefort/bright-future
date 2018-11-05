import React from 'react'
import { withProps } from 'recompose'
import {
  HeaderBarContainer,
  HeaderBar,
  Item,
  Contact,
  ContactButton,
  FacebookIcon,
} from './SiteHeaderBar.style'
import LinkExt from './LinkExt'

const FacebookLink = withProps({
  to: "https://www.facebook.com/Bright.Future.Child.Enrichment.Center/",
})(LinkExt)

const EmailLink = withProps({
  icon: 'mail',
  href: 'mailto:brightfuturecec@gmail.com?subject=Webiste Contact',
})(ContactButton)

const PhoneLink = withProps({
  icon: 'phone',
  href: "tel:8593413350",
})(ContactButton)

const HeaderBarContent = () => (
  <HeaderBarContainer>
    <HeaderBar>
      <Item>Bright Future Child Enrichment Center</Item>
      <Contact>
        <EmailLink>brightfuturecec@gmail.com</EmailLink>
        <PhoneLink>+1 (859) 341-3350</PhoneLink>
        <FacebookLink>
          <FacebookIcon type="facebook" theme="filled" />
        </FacebookLink>
      </Contact>
    </HeaderBar>
  </HeaderBarContainer>
)

export default HeaderBarContent
