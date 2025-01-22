import type { FragmentsDataType } from '@globals/data'
import type { PostByType }        from '@globals/data'
import type { NonNullableObject } from '@globals/data'

export type RequiredPostByType = NonNullableObject<PostByType>

export interface ArticleProps {
  fragmentsData: FragmentsDataType
  postData: RequiredPostByType
}
