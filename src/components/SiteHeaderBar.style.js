import styled from 'styled-components'
import { withProps } from 'recompose'
import { Icon, Button } from 'antd';
import {
  pageblockContainer,
  pageblockOffset,
  whiteOnOrange,
  textShadow,
} from '../styles/mixins'
import { WHITE, BLUE } from '../styles/colors'

export const HeaderBarContainer = styled.div`
  ${pageblockContainer}
  ${whiteOnOrange}
  font-weight: 800;
`

export const HeaderBar = styled.div`
  ${pageblockOffset};
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`

export const Item = styled.div`
`

export const Contact = styled(Item)`
  display: flex;
  justify-content: space-around;
`

export const contactItemMargin = `
  margin-right: 10px;
`;

export const SocialIcon = styled(Icon)`
  ${contactItemMargin}
  font-size: 30px;
  color: ${WHITE};
  margin-top: 2px;
  padding: 0;
`

const FACEBOOK_BLUE = '#3b5998'
export const FacebookIcon = styled(SocialIcon)`
  &:hover {
    color: ${FACEBOOK_BLUE};
    background-color: ${WHITE};
  }
`

export const ContactButton = withProps({ ghost: false })(styled(Button)`
  ${contactItemMargin}
  height: auto;
  font-weight: 500;
  padding: 0 8px;
`)
