import { GET_BLOG_INDEX_PAGE_SEO } from '@globals/data'
import { getClient }               from '@globals/data'

const getBlogIndexPageSeoData = async () => {
  const client = getClient()

  const { data: seoData } = await client.query({
    query: GET_BLOG_INDEX_PAGE_SEO,
  })

  return seoData
}

export { getBlogIndexPageSeoData }