import styled from 'styled-components'
import { withProps } from 'recompose'
import { Icon, Button } from 'antd';
import {
  pageblockContainer,
  pageblockOffset,
  whiteOnOrange,
} from '../styles/mixins'

export const HeaderBarContainer = styled.div`
  ${pageblockContainer}
  ${whiteOnOrange}
  font-weight: 600;
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
  font-size: 26px;
  &:hover {
    cursor: pointer;
  }
`

export const ContactButton = withProps({ ghost: false })(styled(Button)`
  ${contactItemMargin}
  height: auto;
  font-weight: 500;
  padding: 0px 8px;
`)
