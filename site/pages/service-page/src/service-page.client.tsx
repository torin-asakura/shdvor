'use client'

import React          from 'react'
import { FC }         from 'react'

import { Articles }   from '@site/articles-fragment'
import { Footer }     from '@site/footer-fragment'
import { Navigation } from '@site/navigation-fragment'
import { Service }    from '@site/service-fragment'
import { Column }     from '@ui/layout'

import { Seo }        from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

// TODO interface
export const ServicePageClient: FC<ServicePageClientProps> = (props) => {
  console.log('service page client')

  const {
    SEO,
    ogCover,
    data: {
      fragments,
      contacts,
      posts,
      navigation,
      availableRadii,
      serviceBy,
      services,
      carBodies,
    },
  } = props

  return (
    <Column width='100%' alignItems='center'>
      <Seo SEO={SEO} ogCover={ogCover} />
      <Navigation
        active={2}
        navigationData={navigation}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <Service
        servicesData={services}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        serviceData={serviceBy}
        navigationData={navigation}
      />
      <Articles fragmentsData={fragments} navigationData={navigation} postsData={posts} />
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}