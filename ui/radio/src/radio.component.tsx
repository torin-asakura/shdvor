/* eslint-disable */

import type { FC }                     from 'react'

import type { RadioProps }             from './radio.interface.js'

import { createCheckBaseStyles }       from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles } from '@atls-ui-parts/checkbox'
import styled                          from '@emotion/styled'
import React                           from 'react'

import { Layout }                      from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Text }                        from '@ui/text'
import { useHover }                    from '@ui/utils'

import { Container }                   from './container/index.js'
import { getCheckColor }               from './helper/index.js'

const Radio: FC<RadioProps> = ({ children, checked, textTransform = 'lowercase' }) => {
  const [hover, hoverProps] = useHover()

  const RadioStyled = styled.div<{ checked: boolean }>(createCheckBaseStyles())

  const Checkmark = styled.div(
    createCheckBaseStyles(),
    createCheckAppearanceStyles({
      color: getCheckColor(hover, checked),
    })
  )

  return (
    <Column width='100%'>
      <Container checked={checked} {...hoverProps}>
        <Checkmark>
          <Text textTransform={textTransform} fontSize='small' fontWeight='medium'>
            {children}
          </Text>
        </Checkmark>
        <RadioStyled checked={checked} />
      </Container>
      <Layout flexBasis={12} />
    </Column>
  )
}

export { Radio }
