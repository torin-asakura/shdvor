import type { SEOInt }            from '@globals/data'
import type { PostByType }        from '@globals/data'
import type { NonNullableObject } from '@globals/data'
import type { JSX }               from 'react'

export type RequiredPostByType = NonNullableObject<PostByType>

export interface PostPageClientProps {
  params: {
    uri: string
  }
}

type ParamsType = {
  uri: string
}

export interface SeoProps {
  ogCover: string
  SEO: SEOInt
}

export type PostPageProps = ({ params }: { params: ParamsType }) => Promise<JSX.Element | null>

export type PostPageServerProps = ({
  params,
}: {
  params: ParamsType
}) => Promise<PostPageClientProps>
