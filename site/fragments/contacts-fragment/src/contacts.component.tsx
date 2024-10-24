import type { FC }             from 'react'

import type { ContactsProps }  from './contacts.interface.js'

import { memo }                from 'react'
import React                   from 'react'

import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Map }                 from '@ui/map'
import { Text }                from '@ui/text'

import { ContactsInformation } from './contacts-information/index.js'
import { MapComponent }        from './map/index.js'
import { useContacts }         from './hooks/index.js'

const Contacts: FC<ContactsProps> = memo((props) => {
  const contactsInformationData = useContacts(props)
  const { contactsTitle } = contactsInformationData

  return (
    <Column width='100%' maxWidth={1440} marginTop={[80, 80, 104]}>
      <Row>
        <Layout flexBasis={[20, 20, 80]} />
        <Column width='100%'>
          <Layout flexBasis={[20, 20, 32]} />
          <Layout>
            <Text fontWeight='bold' fontSize='extra'>
              {contactsTitle}
            </Text>
          </Layout>
          <Layout flexBasis={[24, 24, 48]} />
        </Column>
        <Layout flexBasis={[20, 20, 80]} />
      </Row>
      <Row
        padding={[20, 20, 80]}
        paddingTop='0 !important'
        paddingBottom='0 !important'
        justifyContent='space-between'
      >
        <ContactsInformation contactsData={contactsInformationData} />
        <MapComponent />
      </Row>
      <Layout flexBasis={[24, 24, 0]} />
      <Box width='100%' height={270} display={['flex', 'flex', 'none']}>
        <Map width='100%' height={270} />
      </Box>
      <Layout flexBasis={[0, 0, 80]} />
    </Column>
  )
})

export { Contacts }
