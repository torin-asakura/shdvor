import type { FC }          from 'react'

import { FormattedMessage } from 'react-intl'
import React                from 'react'

import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

export const NotFoundFragment: FC = () => (
  <Box width='$fill' maxWidth='$g1440' marginTop={[112, 112, 152]} paddingX={[20, 20, 83]}>
    <Text fontWeight='$medium' fontSize='$giant' lineHeight='$grown' color='$black'>
      <FormattedMessage id='not-found' />
    </Text>
  </Box>
)
