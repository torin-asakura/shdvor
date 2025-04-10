/* eslint-disable */

import type { FC }                  from 'react'

import type { NavigationProps }     from './navigation.interface.js'

import { useState }                 from 'react'
import React                        from 'react'

import { Booking }                  from '@fragments/booking-fragment'
import { Box }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { extractFragment }          from '@globals/data'
import { extractFragments }         from '@globals/data'

import { NavigationCommonVariant }  from './navigation-common-variant/index.js'
import { NavigationDesktopVariant } from './navigation-desktop-variant/index.js'
import { getColorBackground }       from './helpers/index.js'

const Navigation: FC<NavigationProps> = ({
  active,
  navigationData,
  availableRadiiData,
  navigationItemsType = 'nav-item',
  fragmentsData,
  carBodiesData,
  servicesData,
  scrollY,
}) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [drawer, setDrawer] = useState<boolean>(false)

  const mainNavigationItem = extractFragment('contentAddons', 'main', navigationData)
  const navigationIndexItems = extractFragments(
    navigationItemsType,
    'contentAddons',
    navigationData
  )
  const signUp = extractFragment('contentAddons', 'sign-up', fragmentsData)

  return (
    <>
      <Booking
        visible={visible}
        setVisible={setVisible}
        fragmentsData={fragmentsData}
        availableRadiiData={availableRadiiData}
        carBodiesData={carBodiesData}
        servicesData={servicesData}
        navigationData={navigationData}
      />
      <Box
        width='100%'
        zIndex={1000}
        height={[80, 80, 104]}
        position='fixed'
        justifyContent='center'
        backgroundColor={getColorBackground(active!, scrollY)}
        transition='.2s'
      >
        <Layout flexBasis={[20, 20, 32]} flexShrink='0' />
        <Box width={['100%', '100%', '1440px']}>
          <Column width='100%'>
            <Layout flexBasis={[20, 20, 28]} />
            <NavigationCommonVariant
              drawer={drawer}
              setDrawer={setDrawer}
              active={active}
              navigationIndexItems={navigationIndexItems}
              mainNavigationItem={mainNavigationItem}
              setVisible={setVisible}
              signUp={signUp}
              scrollY={scrollY}
            />
            <NavigationDesktopVariant
              active={active}
              mainNavigationItem={mainNavigationItem}
              navigationIndexItems={navigationIndexItems}
              setVisible={setVisible}
              signUp={signUp}
              scrollY={scrollY}
            />
            <Layout flexBasis={[20, 20, 28]} />
          </Column>
        </Box>
        <Layout flexBasis={[20, 20, 32]} flexShrink='0' />
      </Box>
    </>
  )
}

export { Navigation }
