import React           from 'react'
import { FC }          from 'react'

import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { NextNavLink } from '@ui/link'
import { Text }        from '@ui/text'

import { ItemProps }   from './item.interface'
import { getColor }    from '../../helpers'

const Item: FC<ItemProps> = ({ active, content, title, scrollY }) => (
  <Column>
    <Layout flexBasis={8} />
    <Layout>
      <NextNavLink path={content}>
        <Text color={Math.abs(scrollY!) < 100 ? getColor(active, scrollY) : ''} fontWeight='medium'>
          {title}
        </Text>
      </NextNavLink>
    </Layout>
  </Column>
)

export { Item }
