/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import { memo }           from 'react'
import React              from 'react'

import { vars }           from '@ui/theme'

import { iconSprinkles }  from '../icon.css.js'

export const VkIcon = memo(({ color, ...props }: IconProps) => {
  const { className, style, otherProps } = iconSprinkles(props)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 22 13'
      className={clsx(className, otherProps?.className)}
      style={Object.assign({}, style, otherProps.style)}
      {...otherProps}
    >
      <path
        fill={vars.colors[color as keyof typeof vars.colors] || color || '#252C32'}
        fillRule='evenodd'
        d='M11.74.5c-1.118.005-1.83.007-2.835.007-.84 0-1.312.345-1.327.55-.01.142.23.264.461.38q.116.057.215.113c.251.158.479.66.479 1v2.961c0 .281-.063.477-.287.66a.55.55 0 0 1-.371.11c-.111 0-.262-.021-.366-.158-.88-1.155-1.063-1.505-1.88-3.072-.21-.404-.463-.889-.781-1.49l-.012-.021c-.071-.136-.146-.277-.292-.384-.154-.114-.382-.188-.748-.188-.688 0-1.23.005-1.717.01-.394.004-.751.008-1.118.008-.776 0-.701.483-.597.702.93 1.967 1.874 3.845 2.96 5.752 1.27 2.232 2.433 3.573 4.388 4.537.454.223 1.273.454 2.219.454h2.01c.258 0 .687-.207.687-.484v-1.53c0-.406.37-.572.612-.68l.052-.024c.277-.127.566.073.712.232.255.275.445.482.599.65.526.57.63.682 1.421 1.526.231.247.406.377.843.377l2.541.001c.56.001.735.002 1.12-.002.193-.001.48-.296.544-.41.084-.152.275-.693-.03-1.044-.79-.905-1.59-1.751-2.373-2.58q-.372-.393-.737-.782a.48.48 0 0 1-.138-.308c-.002-.124.066-.245.138-.346 1.137-1.6 2.076-2.956 3.098-4.64.332-.547.289-.935.228-1.068-.071-.155-.289-.368-.538-.37-.539-.003-.957-.008-1.355-.012-.61-.007-1.174-.014-2.055-.013h-.075c-.403-.001-.758-.002-.983.498-.64 1.422-1.683 3.593-2.589 4.495-.167.167-.39.29-.586.291s-.402-.133-.431-.456c-.014-.94-.012-1.797-.01-2.665 0-.56.001-1.125-.002-1.72-.002-.448-.182-.575-.326-.675l-.015-.01c-.198-.14-.512-.183-.753-.182'
        clipRule='evenodd'
      />
    </svg>
  )
})
