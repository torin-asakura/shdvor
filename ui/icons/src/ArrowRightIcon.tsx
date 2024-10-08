import { useTheme }  from '@emotion/react'
/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const ArrowRightIcon = (props: IconProps) => {
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
        d='M0.381283 0.381281C0.722991 0.0395728 1.27701 0.0395728 1.61872 0.381282L7.61872 6.38128C7.96043 6.72299 7.96043 7.27701 7.61872 7.61872L1.61872 13.6187C1.27701 13.9604 0.72299 13.9604 0.381281 13.6187C0.0395728 13.277 0.0395728 12.723 0.381282 12.3813L5.76256 7L0.381283 1.61872C0.0395739 1.27701 0.0395739 0.72299 0.381283 0.381281Z'
        fill='#7B838A'
      />
    </svg>
  )
}
