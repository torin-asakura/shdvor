import type { ApolloClient }           from '@apollo/client'
import type { BlogPostsQueryDataType } from '@globals/data'

import { GET_BLOG_POSTS }              from '@globals/data'

export const getBlogPost = async (
  client: ApolloClient<unknown>,
  uri: string
): Promise<object | null | undefined> => {
  const blogPostsQueryResult = await client.query<BlogPostsQueryDataType>({ query: GET_BLOG_POSTS })
  const foundPost = blogPostsQueryResult?.data?.posts?.nodes?.find((postData) => {
    const postUri = postData?.uri || ''
    return postUri.split('/').includes(uri)
  })

  return foundPost
}
