import type { FC }           from 'react'

import type { ServiceProps } from './service.interface.js'

import { FormattedMessage }  from 'react-intl'
import { useRouter }         from 'next/navigation.js'
import React                 from 'react'

import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { Divider }           from '@ui/divider'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Ruble }             from '@ui/text'
import { Space }             from '@ui/text'
import { Text }              from '@ui/text'
import { useHover }          from '@ui/utils'

const Service: FC<ServiceProps> = ({ uri, title, description, price }) => {
  const router = useRouter()
  const [hover, hoverProps] = useHover()

  const cost = price[Object.keys(price)[1]]?.passenger

  return (
    <Button
      size='ghost'
      variant='transparent'
      onClick={(): void => {
        router.push(uri)
      }}
    >
      <Column fill {...hoverProps}>
        <Layout flexBasis={[24, 24, 30]} />
        <Row>
          <Column fill>
            <Layout>
              <Text
                textAlign='start'
                whiteSpace='normal'
                fontWeight='$medium'
                fontSize='$xl'
                color={hover ? '$blue' : '$black'}
              >
                {title}
              </Text>
            </Layout>
            <Layout flexBasis={[4, 4, 8]} />
            <Layout>
              <Column>
                {description.split('|n|').map((item: string) => (
                  <Row key={item} flexWrap='wrap' maxWidth={['100%', '100%', 500]}>
                    <Text
                      textAlign='start'
                      whiteSpace='normal'
                      wordWrap='break-word'
                      lineHeight='$medium'
                      color='$darkGray'
                    >
                      {item}
                    </Text>
                  </Row>
                ))}
              </Column>
            </Layout>
          </Column>
          <Column justifyContent='center' width={200} display={['none', 'none', 'flex']}>
            <Condition match={Boolean(hover)}>
              <Button variant='secondary' size='common'>
                <Row justifyContent='center'>
                  <Text fontWeight='$medium'>
                    <FormattedMessage id='service.by' defaultMessage='от' />
                    <Space />
                    {cost}
                    <Space />
                    <Ruble />
                  </Text>
                </Row>
              </Button>
            </Condition>
          </Column>
        </Row>
        <Layout flexBasis={[24, 24, 30]} />
        <Divider color='$gray' />
      </Column>
    </Button>
  )
}

export { Service }
