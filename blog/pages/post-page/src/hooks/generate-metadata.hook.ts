/* eslint-disable */

import { GET_PAGE_SEO }    from '@globals/data'
import { GET_PREVIEW }     from '@globals/data'
import { getSeoMetadata }  from '@globals/data'
import { getServerClient } from '@globals/data/apollo'

import { getBlogPost }     from '../getters/index.js'

const generateMetadata = async ({ params }: { params: { uri: string } }) => {
  const { uri } = params
  const client = getServerClient()

  const foundPost = await getBlogPost(client, uri)
  if (!foundPost) return {}

  const {
    data: {
      postBy: { seo: seoData },
    },
  } = await client.query({ query: GET_PAGE_SEO, variables: { uri } })

  const {
    data: {
      mediaItemBy: { sourceUrl: ogCover },
    },
  } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  return getSeoMetadata({ ogCover, seoData })
}

export { generateMetadata }
