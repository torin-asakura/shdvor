import React                 from 'react'
import { FC }                from 'react'
import { useRouter }         from 'next/router'

import { Button }            from '@ui/button'
import { BackIcon }          from '@ui/icons'
import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'
import { useHover }          from '@ui/utils'

import { ReturnButtonProps } from './return-button.interface'

const ReturnButton: FC<ReturnButtonProps> = ({ title }) => {
  const [hover, hoverProps] = useHover()

  const route = useRouter()

  return (
    <Button color='grey' size='ghost' onClick={() => route.replace('/')} {...hoverProps}>
      <Box width={102} alignItems='center'>
        <Layout>
          <BackIcon width={12} height={24} color={hover ? 'white' : 'charcoal'} />
        </Layout>
        <Layout flexBasis={8} />
        <Layout>
          <Text fontWeight='medium'>{title}</Text>
        </Layout>
      </Box>
    </Button>
  )
}

export { ReturnButton }
