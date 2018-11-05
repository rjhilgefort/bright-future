import Color from 'color'

export const orange = Color('orange')
export const yellow = Color('yellow')
export const blue = Color('blue')
export const grey = Color('grey').lighten(0.5)

export const white = Color('white')
export const WHITE = white.hex()

export const primary = orange
export const PRIMARY = primary.hex()

export const primaryLight = primary.lighten(0.5)
export const PRIMARY_LIGHT = primaryLight.hex()
export const INACTIVE = primaryLight.hex()

export const primaryDark = primary.darken(0.5)
export const PRIMARY_DARK = primaryDark.hex()

export const secondary = blue
export const SECONDARY = secondary.hex()
