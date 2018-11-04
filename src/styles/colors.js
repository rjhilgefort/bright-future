import Color from 'color'

export const orange = Color('orange')
export const yellow = Color('yellow')
export const grey = Color('grey').lighten(0.5)

export const primary = orange
export const primaryLight = primary.lighten(0.5)
export const secondary = yellow

export const PRIMARY = primary.hex()
export const PRIMARY_LIGHT = primaryLight.hex()
export const INACTIVE = primaryLight.hex()
export const SECONDARY = secondary.hex()
