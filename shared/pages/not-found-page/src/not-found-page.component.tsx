'use client'

import type { FC }               from 'react'

import React                     from 'react'

import { Footer }                from '@fragments/footer-fragment'
import { Navigation }            from '@fragments/navigation-fragment'
import { NotFoundFragment }      from '@fragments/not-found-fragment'
import { Column }                from '@ui/layout'
import { getContactsData }       from '@globals/data'
import { getNavigationData }     from '@globals/data'
import { getAvailableRadiiData } from '@globals/data'
import { getFragmentsData }      from '@globals/data'
import { getCarBodiesData }      from '@globals/data'
import { getServicesData }       from '@globals/data'

export const NotFoundPage: FC = () => {
  const { contacts } = getContactsData()
  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { fragments } = getFragmentsData()
  const { carBodies } = getCarBodiesData()
  const { services } = getServicesData()

  return (
    <Column width='100%' height='$fill' alignItems='center' position='fixed'>
      <Navigation
        navigationItemsType='blog-nav-item'
        backgroundColor='white'
        availableRadiiData={availableRadii}
        navigationData={navigation}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <NotFoundFragment />
      <Footer
        fragmentsData={fragments}
        contactsData={contacts}
        navigationItemsType='blog-nav-item'
      />
    </Column>
  )
}
