import React          from 'react'
import { forwardRef } from 'react'

import { ARTICLE }    from '@store/articles'
import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'
import { screenVar }  from '@store/articles'

const Articles = forwardRef((props, ref: any) => {
  // FIXME take first 3 elements
  const lastArticles = ['Article 1', 'Article 2', 'Article 3']
  return (
    <Box
      width='100%'
      height={[569, 569, 693]}
      backgroundColor='fillGray'
      justifyContent='center'
      ref={ref}
    >
      <Box minWidth={['100%', '100%', '1440px']} justifyContent='space-between'>
        <Layout flexBasis={[20, 20, 80]} />
        <Column width='100%'>
          <Layout flexBasis={[64, 64, 100]} />
          <Layout>
            <Text fontWeight='medium' fontSize='giant'>
              Text
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 48]} />
          <Row justifyContent='space-between' display={['none', 'none', 'flex']}>
            {lastArticles.map((article) => (
              <Column onClick={() => screenVar(ARTICLE)}>
                <Box width={405} height={260}>
                  <ImageBlock />
                </Box>
                <Layout flexBasis={24} />
                <Layout>
                  <Text>{article}</Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Text fontWeight='medium' fontSize='large'>
                    Text
                  </Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Text color='darkGray'>Text</Text>
                </Layout>
              </Column>
            ))}
          </Row>
          <Row display={['flex', 'flex', 'none']}>
            {/* TODO carousel */}
            <Column width='100%'>
              <Box width={300} height={200}>
                <ImageBlock />
              </Box>
              <Layout flexBasis={24} />
              <Layout>
                <Text>Article</Text>
              </Layout>
              <Layout flexBasis={8} />
              <Layout>
                <Text fontWeight='medium' fontSize='big'>
                  Text
                </Text>
              </Layout>
              <Layout flexBasis={8} />
              <Layout>
                <Text color='darkGray'>Text</Text>
              </Layout>
            </Column>
          </Row>
          <Layout flexBasis={[64, 64, 100]} />
        </Column>
        <Layout flexBasis={[0, 0, 80]} />
      </Box>
    </Box>
  )
})

export { Articles }
