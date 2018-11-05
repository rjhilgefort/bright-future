import { PAGE_WIDTH } from './variables'
import { PRIMARY, SECONDARY, WHITE } from './colors'

export const pageblockContainer = `
  display: flex;
  width: 100%;
  justify-content: center;
`

export const pageblockOffset = `
  max-width: ${PAGE_WIDTH}px;
  width: calc(100% - 2rem);
  padding: 0 1rem 0 1rem;
`

export const whiteOnOrange = `
  background-color: ${PRIMARY};
  color: ${WHITE};
  font-size: 16px;
`

export const textShadow = color =>
  `text-shadow: -1px 0 ${color}, 0 1px ${color}, 1px 0 ${color}, 0 -1px ${color};`
