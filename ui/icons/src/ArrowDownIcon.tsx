import { useTheme }  from '@emotion/react'
/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces.js'

export const ArrowDownIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 3.25C10.4142 3.25 10.75 3.58579 10.75 4V14.1893L13.4697 11.4697C13.7626 11.1768 14.2374 11.1768 14.5303 11.4697C14.8232 11.7626 14.8232 12.2374 14.5303 12.5303L10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697C5.76256 11.1768 6.23744 11.1768 6.53033 11.4697L9.25 14.1893V4C9.25 3.58579 9.58579 3.25 10 3.25Z'
        fill='white'
      />
    </svg>
  )
}