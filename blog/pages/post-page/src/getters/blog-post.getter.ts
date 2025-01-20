import type { ApolloClient }           from '@apollo/client'
import type { BlogPostsQueryDataType } from '@globals/data'

import { GET_BLOG_POSTS }              from '@globals/data'

export const getBlogPost = async (
  client: ApolloClient<unknown>,
  uri: string
): Promise<object | undefined> => {
  const blogPostsQueryResult = await client.query<BlogPostsQueryDataType>({ query: GET_BLOG_POSTS })
  const findedPost = blogPostsQueryResult?.data?.posts?.nodes?.find((postData) => {
    const postUri = postData?.uri
    if (postUri) return postUri.split('/').includes(uri)
    return null
  })

  return findedPost as object
}
