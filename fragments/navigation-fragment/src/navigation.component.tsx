import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Text }            from '@ui/text'
import { Button }          from '@ui/button'
import { Layout }          from '@ui/layout'
import { NextLink }        from '@ui/link'
import { Logo }            from '@ui/logo'
import { MenuIcon }        from '@ui/icons'

import { NavigationList }  from './navigation-list'
import { SizeButton }      from './size-button'
import { NavigationProps } from './navigation.interface'

const Navigation: FC<NavigationProps> = ({ pageStyle = 'light' }) => (
  <Box width='100%' minHeight={[80, 104, 104]}>
    <Row>
      <Layout flexBasis={[20, 32, 32]} />
      <Column width='100%'>
        <Layout flexBasis={[20, 28, 28]} />
        <Row justifyContent='space-between'>
          <Box alignItems='center' width={[84, 201, 201]}>
            <Layout display={['flex', 'none', 'none']}>
              <MenuIcon width={24} height={24} />
            </Layout>
            <Layout flexBasis={[16, 0, 0]} flexShrink={0} />
            <Layout>
              <Logo pageStyle={pageStyle} />
            </Layout>
          </Box>
          <Box display={['none', 'flex', 'flex']} width={410} alignItems='center'>
            <NavigationList pageStyle={pageStyle} />
          </Box>
          <Box width={[176, 201, 201]}>
            <SizeButton pageStyle={pageStyle} />
            <Layout flexBasis={16} />
            <NextLink href='/booking'>
              <Box width={[124, 137, 137]} height={[40, 48, 48]}>
                <Layout width='100%' display={['flex', 'none', 'none']}>
                  <Button size='small'>
                    <Text>Sign up</Text>
                  </Button>
                </Layout>
                <Layout width='100%' display={['none', 'flex', 'flex']}>
                  <Button>
                    <Text>Sign up</Text>
                  </Button>
                </Layout>
              </Box>
            </NextLink>
          </Box>
        </Row>
        <Layout flexBasis={[20, 28, 28]} />
      </Column>
      <Layout flexBasis={[20, 32, 32]} />
    </Row>
  </Box>
)

export { Navigation }