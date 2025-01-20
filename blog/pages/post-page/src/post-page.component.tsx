import type { PostPageProps }        from './post-page.interfaces.js'

import React                         from 'react'

import { GET_BLOG_POST }             from '@globals/data'
import { PreloadQuery }              from '@globals/data/apollo'
import { NotFoundPage }              from '@shared/not-found-page'

import { PostNotFoundError }         from './errors/index.js'
import { PostPageClient }            from './post-page.client.js'
import { runPostPageServerQuerires } from './hooks/index.js'

const PostPage: PostPageProps = async ({ params }) => {
  try {
    await runPostPageServerQuerires({ params })
    const { uri } = params
    return (
      <PreloadQuery
        query={GET_BLOG_POST}
        variables={{
          uri,
        }}
      >
        <PostPageClient params={params} />
      </PreloadQuery>
    )
  } catch (e) {
    if (e instanceof PostNotFoundError) return <NotFoundPage />
    throw e
  }
}

export default PostPage
