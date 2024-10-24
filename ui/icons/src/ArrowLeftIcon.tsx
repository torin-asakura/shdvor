import { useTheme }  from '@emotion/react'
/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const ArrowLeftIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 8 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.61872 0.381282C7.96043 0.72299 7.96043 1.27701 7.61872 1.61872L2.23744 7L7.61872 12.3813C7.96043 12.723 7.96043 13.277 7.61872 13.6187C7.27701 13.9604 6.72299 13.9604 6.38128 13.6187L0.381282 7.61872C0.0395728 7.27701 0.0395728 6.72299 0.381282 6.38128L6.38128 0.381282C6.72299 0.0395728 7.27701 0.0395728 7.61872 0.381282Z'
        fill='#7B838A'
      />
    </svg>
  )
}
