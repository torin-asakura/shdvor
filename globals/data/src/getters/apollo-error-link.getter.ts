/* eslint-disable no-console */

import type { ApolloLink }            from '@apollo/client'
import type { GraphQLFormattedError } from 'graphql'

import { onError }                    from '@apollo/client/link/error'

export const getApolloErrorLink = (): ApolloLink => {
  const errorLink = onError((errorResponse) => {
    const extendedErrorResponse = errorResponse as unknown as {
      graphQLErrors: Array<GraphQLFormattedError & { debugMessage: string }>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cause?: Record<string, any>
      operation?: Record<string, any>
    }
    const { graphQLErrors, cause, operation } = extendedErrorResponse

    if (operation) {
      console.debug('OperationVariables:', operation.variables)
      console.debug('OperationQuery:', operation.query)
    }
    if (graphQLErrors) {
      graphQLErrors.forEach(({ debugMessage, message, locations, path, extensions }) => {
        console.debug(`DebugMessage: ${debugMessage}`)
        console.debug(`Message: ${message}`)
        console.debug(`Location:`, locations)
        console.debug(`Path:`, path)
        console.debug(`Extenstions:`, extensions)
      })
    }
    if (cause) {
      const { debugMessage, message, extensions, locations, path } = cause
      console.debug(`DebugMessage: ${debugMessage}`)
      console.debug(`Message: ${message}`)
      console.debug(`Location:`, locations)
      console.debug(`Path:`, path)
      console.debug(`Extenstions:`, extensions)
    }
  })

  return errorLink
}
