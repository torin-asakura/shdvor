import type { styleFn } from 'styled-system'

export const baseContainerStyles: styleFn = ({ isOpen }) => ({
  transform: `rotate(${isOpen ? 180 : 0}deg)`,
  transition: '.35s',
})
