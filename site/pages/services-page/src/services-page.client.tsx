'use client'

import type { FC }                      from 'react'

import type { ServicesPageClientProps } from './services-page.interface.js'

import React                            from 'react'

import { Footer }                       from '@fragments/footer-fragment'
import { Navigation }                   from '@fragments/navigation-fragment'
import { AllServices }                  from '@site/all-services-fragment'
import { Column }                       from '@ui/layout'
import { getAvailableRadiiData }        from '@globals/data'
import { getCarBodiesData }             from '@globals/data'
import { getContactsData }              from '@globals/data'
import { getFragmentsData }             from '@globals/data'
import { getNavigationData }            from '@globals/data'
import { getServicesData }              from '@globals/data'
import { replaceServicePricesHelper }   from '@globals/data'

export const ServicesPageClient: FC<ServicesPageClientProps> = ({ servicesDataToReplace }) => {
  const { fragments } = getFragmentsData()
  const { contacts } = getContactsData()
  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { services: baseServices } = getServicesData()
  const { carBodies } = getCarBodiesData()

  const services = replaceServicePricesHelper(baseServices, servicesDataToReplace)

  return (
    <Column width='100%' alignItems='center'>
      <Navigation
        active={2}
        navigationData={navigation}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={baseServices}
      />
      <AllServices fragmentsData={fragments} servicesData={services} />
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
