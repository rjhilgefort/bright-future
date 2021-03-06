import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import * as _ from 'ramda'
import { pageblockContainer, pageblockOffset } from '../styles/mixins'
import { PRIMARY, INACTIVE } from '../styles/colors'
import { activeTern } from '../styles/utils'
import { LOGO_SIZE } from '../styles/variables'

export const MenuBarContainer = styled.div`
  ${pageblockContainer};
  margin-bottom: 30px;
`

export const MenuBar = styled.div`
  ${pageblockOffset};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
  align-items: center;
`

export const LogoContainer = styled.div`
  width: ${LOGO_SIZE}px;
  height: ${LOGO_SIZE}px;
  margin: 0 10px 0 0;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`

const activeStyle = active => `
  color: ${active ? PRIMARY : INACTIVE};
  border-bottom: 5px solid ${active ? PRIMARY : 'transparent'};
`
export const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;

  font-size: 24px;
  font-weight: 400;

  ${_.compose(activeStyle, _.propEq('active', 1))}

  &:hover {
    ${activeStyle(true)};
  }
`
