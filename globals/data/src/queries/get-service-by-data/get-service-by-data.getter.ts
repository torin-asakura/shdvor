/* eslint-disable */

import { useSuspenseQuery } from '@apollo/client'

import { GET_SERVICE_BY }   from './get-service-by-data.query.js'

const getServiceByData = (uri: string) => {
  const { data } = useSuspenseQuery(GET_SERVICE_BY, {
    variables: { uri },
  })

  if (data) {
    return {
      // @ts-expect-error not exist
      serviceBy: data.serviceBy,
    }
  }

  return { serviceBy: [] }
}

export { getServiceByData }
