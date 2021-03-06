import React                         from 'react'
import { FC }                        from 'react'

import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Column }                    from '@ui/layout'
import { NextNavLink }               from '@ui/link'
import { Text }                      from '@ui/text'

import { NavigationListMobileProps } from './navigation-list-mobile.interface'
import { getColor }                  from '../helpers'
import { getColorBackground }        from '../helpers'

const NavigationListMobile: FC<NavigationListMobileProps> = ({ active }) => (
  <Box backgroundColor={getColorBackground(active!)} style={{ transition: '.2s' }}>
    <Layout flexBasis={20} flexShrink={0} />
    <Column fill>
      <Row>
        <NextNavLink path='/services'>
          <Text color={getColor(active!)} fontWeight='medium'>
            services
          </Text>
        </NextNavLink>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <NextNavLink path='/contacts'>
          <Text color={getColor(active!)} fontWeight='medium'>
            contacts
          </Text>
        </NextNavLink>
      </Row>
      <Layout flexBasis={24} />
      <Row>
        <NextNavLink path='/blog'>
          <Text color={getColor(active!)} fontWeight='medium'>
            blog
          </Text>
        </NextNavLink>
      </Row>
      <Layout flexBasis={32} />
    </Column>
  </Box>
)

export { NavigationListMobile }
