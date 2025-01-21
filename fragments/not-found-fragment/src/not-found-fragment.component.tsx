import type { FC }          from 'react'

import { FormattedMessage } from 'react-intl'
import React                from 'react'

import { Button }           from '@ui/button'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { BaseLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { Illustration }     from './assets/index.js'

export const NotFoundFragment: FC = () => (
  <Box width='$fill' maxWidth='$g1440' marginTop={[128, 128, 152]} justifyContent='center'>
    <Column alignItems='center'>
      <Text
        fontWeight='$medium'
        fontSize='$medium.semiIncreased'
        lineHeight='$normal.default'
        color='$black'
      >
        <FormattedMessage id='error.whoops' />
      </Text>
      <Layout flexBasis={[24, 24, 32]} />
      <Illustration />
      <Text
        fontWeight='$medium'
        fontSize='$medium.reduced'
        lineHeight='$normal.default'
        color='$black'
      >
        <FormattedMessage id='error.not-found' />
      </Text>
      <Layout flexBasis={48} />
      <BaseLink style={{ width: '100%' }}>
        <Button size='common' variant='secondary' style={{ width: '100%' }}>
          <Text
            fontWeight='$semiBold'
            fontSize='$normal.reduced'
            lineHeight='$normal.default'
            color='$black'
          >
            <FormattedMessage id='button.to-home' />
          </Text>
        </Button>
      </BaseLink>
    </Column>
  </Box>
)
