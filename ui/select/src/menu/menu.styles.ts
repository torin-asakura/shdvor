import type { styleFn } from 'styled-system'

export const baseMenuStyles: styleFn = ({ triggerBounds }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  padding: 0,
  width: triggerBounds ? triggerBounds.width : 'auto',
  zIndex: 9999,
})

export const shapeMenuStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.mini,
  fontFamily: theme.fonts.primary,
  marginTop: 17,
})

export const appearanceMenuStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.white,
  boxShadow: theme.shadows.sharp,
})
