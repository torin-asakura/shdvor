import React                 from 'react'
import { FC }                from 'react'
import { useRouter }         from 'next/router'
import { useState }          from 'react'

import { Button }            from '@ui/button'
import { BackIcon }          from '@ui/icons'
import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { ReturnButtonProps } from './return-button.interface'

const ReturnButton: FC<ReturnButtonProps> = ({ title }) => {
  const [onHover, setOnHover] = useState(false)

  const route = useRouter()

  return (
    <Button color='blueText' size='ghost'>
      <Box
        width={102}
        alignItems='center'
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onClick={() => route.replace('/services')}
      >
        <Layout>
          <BackIcon width={12} height={24} color={onHover ? 'blue' : 'black'} />
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
