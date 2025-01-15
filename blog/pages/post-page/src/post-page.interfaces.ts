import type { SEOInt }     from '@globals/data'
import type { PostByType } from '@globals/data'

export type RequiredPostByType = globals.NonNullableObject<PostByType>

export interface PostPageClientProps {
  params: {
    uri: string
  }
}

type ParamsType = Promise<{
  uri: string
}>
export interface SeoProps {
  ogCover: string
  SEO: SEOInt
}

export type PostPageProps = (props: { params: ParamsType }) => Promise<JSX.Element>

export type PostPageServerProps = ({
  params,
}: {
  params: ParamsType
}) => Promise<PostPageClientProps>
