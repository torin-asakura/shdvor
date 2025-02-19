/* eslint-disable */

import type { FC }            from 'react'

import type { ArticlesProps } from './articles.interface.js'

import { forwardRef }         from 'react'
import React                  from 'react'

import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Link }               from '@ui/link'
import { Text }               from '@ui/text'
import { extractFragment }    from '@globals/data'
import { extractFragments }   from '@globals/data'

import { Carousel }           from './carousel/index.js'
import { PreviewArticle }     from './preview-article/index.js'

const Articles: FC<ArticlesProps> = forwardRef((
  { postsData, fragmentsData, navigationData },
  ref: any
) => {
  const latestPublications = extractFragment(
    'contentAddons',
    'latest-publications',
    fragmentsData
  ).title

  const navigationItems = extractFragments('nav-item', 'contentAddons', navigationData)
  // @ts-expect-error any type
  const linkBlog = navigationItems.filter(({ contentAddons }) => contentAddons.title === 'Блог')[0]

  return (
    <Box
      ref={ref}
      width='100%'
      height={[569, 569, 693]}
      backgroundColor='$fillGray'
      justifyContent='center'
    >
      <Box width='100%' maxWidth={['100%', '100%', 1440]} justifyContent='space-between'>
        <Layout flexBasis={[20, 20, 80]} flexShrink='0' />
        <Column fill overflow='hidden'>
          <Layout flexBasis={[64, 64, 100]} />
          <Layout>
            <Text fontWeight='$medium' fontSize={['$extraLarge', '$extraLarge', '$giant']}>
              {latestPublications}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 48]} />
          <Row overflow='hidden'>
            <Carousel>
              {
                // @ts-expect-error null | undefined
                postsData.slice(0, 4).map(({ uri, title, date, excerpt, featuredImage }) => (
                  <Link
                    key={uri}
                    href={`${linkBlog.contentAddons.content}/${uri}`}
                    // @ts-expect-error not assignable
                    width={['auto', 'auto', '100%']}
                  >
                    <PreviewArticle
                      title={title}
                      date={date}
                      excerpt={excerpt}
                      featuredImage={featuredImage}
                    />
                  </Link>
                ))
              }
            </Carousel>
          </Row>
          <Layout flexBasis={[64, 64, 100]} />
        </Column>
        <Layout flexBasis={[0, 20, 80]} flexShrink='0' />
      </Box>
    </Box>
  )
})

export { Articles }
