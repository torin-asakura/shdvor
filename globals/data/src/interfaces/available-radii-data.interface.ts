import type { AvailableRadiiQueryDataType } from '@globals/data'

type AvailableRadiiType = Exclude<
  AvailableRadiiQueryDataType['availableRadiusItems'],
  null | undefined
>
export type AvailableRadiiDataType = AvailableRadiiType['nodes']