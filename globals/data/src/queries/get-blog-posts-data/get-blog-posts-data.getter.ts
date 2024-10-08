/* eslint-disable */

import type { GetPostsQuery as BlogPostsQueryDataType } from '@globals/data'

import { useSuspenseQuery }                             from '@apollo/client'

import { GET_BLOG_POSTS }                               from './get-blog-posts-data.query.js'

const getBlogPostsData = () => {
  const { data }: { data: BlogPostsQueryDataType } = useSuspenseQuery(GET_BLOG_POSTS)

  if (data && data.posts) {
    return {
      posts: data.posts.nodes,
    }
  }

  return { posts: [] }
}

export { getBlogPostsData }
