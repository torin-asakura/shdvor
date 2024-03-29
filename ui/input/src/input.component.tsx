import styled                          from '@emotion/styled'
import { RawInput as RawInputElement } from '@atls-ui-parts/input'
import { useChangeValue }              from '@atls-ui-parts/input'

import React                           from 'react'
import { ForwardRefRenderFunction }    from 'react'
import { forwardRef }                  from 'react'

import { Divider }                     from '@ui/divider'
import { Layout }                      from '@ui/layout'
import { Column }                      from '@ui/layout'

import { InputProps }                  from './input.interfaces'
import { baseStyles }                  from './input.styles'
import { shapeStyles }                 from './input.styles'
import { additionalAppearanceStyles }  from './input.styles'
import { appearanceStyles }            from './input.styles'

export const InputElement = styled.div<any>(baseStyles, shapeStyles, appearanceStyles)
const RawInput = styled(RawInputElement)(additionalAppearanceStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { value, size, type = 'text', disabled, onChange, onChangeNative, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  return (
    <Column width='100%'>
      <InputElement {...props} type={type} size={size}>
        <RawInput
          ref={ref}
          type={type}
          disabled={disabled}
          value={value}
          onChange={changeValue}
          {...props}
        />
      </InputElement>
      <Layout flexBasis={16} />
      <Divider backgroundColor={value !== '' ? 'primaryBlue' : 'gray'} />
    </Column>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
