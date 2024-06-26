import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'

import { Item }                from './item'
import { NavigationListProps } from './navigation-list.interface'

const NavigationList: FC<NavigationListProps> = ({ active, scrollY, navigation }) => (
  <Box width='100%' justifyContent='space-between' flexWrap='wrap'>
    {navigation.map(({ contentAddons: { title, content } }) => (
      <Layout key={title}>
        <Item title={title} content={content} active={active} scrollY={scrollY} />
      </Layout>
    ))}
  </Box>
)

export { NavigationList }
