import type { GetFragmentsQuery as FragmentsQueryDataType } from '@globals/data'

type FragmentsType = Exclude<FragmentsQueryDataType['fragments'], null | undefined>
export type FragmentsDataType = FragmentsType['nodes']
