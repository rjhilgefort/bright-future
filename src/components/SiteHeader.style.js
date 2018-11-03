import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { pageblockContainer, pageblockOffset } from '../styles'
import { primary } from '../styles/colors'

const logoSize = 100

export const HeaderContainer = styled.div`
  ${pageblockContainer};
`

export const Header = styled.div`
  ${pageblockOffset};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
  align-items: center;
`

export const LogoContainer = styled.div`
  width: ${logoSize}px;
  height: ${logoSize}px;
  margin: 0 10px 0 0;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`

const activeMenuItem = `
  border-bottom: 4px solid ${primary};
`
export const MenuItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  border-bottom: 5px solid transparent;

  font-size: 26px;
  font-weight: 500;

  color: ${primary};

  &:hover {
    color: ${primary};
    ${activeMenuItem};
  }

  ${x =>
    x.active &&
    css`
      ${activeMenuItem};
    `};
`
