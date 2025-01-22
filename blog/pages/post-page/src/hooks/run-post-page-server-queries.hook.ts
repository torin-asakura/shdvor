import type { PostPageServerProps } from '../post-page.interfaces.js'

import { GET_FRAGMENTS }            from '@globals/data'
import { GET_CONTACTS }             from '@globals/data'
import { GET_NAVIGATION }           from '@globals/data'
import { GET_AVAILABLE_RADII }      from '@globals/data'
import { GET_BLOG_POST }            from '@globals/data'
import { GET_CAR_BODIES }           from '@globals/data'
import { GET_SERVICES }             from '@globals/data'
import { getServerClient }          from '@globals/data/apollo'

import { PostNotFoundError }        from '../errors/index.js'
import { getBlogPost }              from '../getters/index.js'

// @ts-expect-error notAssignable
export const runPostPageServerQuerires: PostPageServerProps = async ({ params }) => {
  const client = getServerClient()
  const { uri } = params

  const foundPost = await getBlogPost(client, uri)
  if (!foundPost) throw new PostNotFoundError()

  const promises = [
    client.query({ query: GET_FRAGMENTS }),
    client.query({ query: GET_CONTACTS }),
    client.query({ query: GET_NAVIGATION }),
    client.query({ query: GET_AVAILABLE_RADII }),
    client.query({ query: GET_BLOG_POST, variables: { uri } }),
    client.query({ query: GET_CAR_BODIES }),
    client.query({ query: GET_SERVICES }),
  ]

  await Promise.allSettled(promises)
}
