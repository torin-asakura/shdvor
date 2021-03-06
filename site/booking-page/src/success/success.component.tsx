import React        from 'react'
import { FC }       from 'react'

import { Button }   from '@ui/button'
import { Column }   from '@ui/layout'
import { Box }      from '@ui/layout'
import { Layout }   from '@ui/layout'
import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'

const Success: FC = () => (
  <Column width='100%'>
    <Layout flexBasis={[40, 40, 44]} />
    <Layout>
      <Text fontWeight='medium' fontSize='giant'>
        Успешно
      </Text>
    </Layout>
    <Layout flexBasis={24} />
    <Layout>
      <Text>Text</Text>
    </Layout>
    <Layout flexBasis={32} />
    <NextLink path='/'>
      <Box width='100%'>
        <Button color='secondary'>Button</Button>
      </Box>
    </NextLink>
    <Layout flexBasis={[48, 48, 128]} />
  </Column>
)

export { Success }
