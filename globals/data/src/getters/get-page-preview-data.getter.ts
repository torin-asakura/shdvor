import { GET_PREVIEW } from '@globals/data'
import { getClient }   from '@globals/data'

const getPagePreviewData = async () => {
  const client = getClient()

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/cover/',
    },
  })

  return previewData
}

export { getPagePreviewData }