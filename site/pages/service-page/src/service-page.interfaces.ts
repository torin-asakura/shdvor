import type { ServicesDataToReplaceType } from '@globals/data'

export type ParamsType = {
  uri: string
}

export type PropsType = {
  params: Promise<ParamsType>
}

export interface ServicePageClientProps {
  params: ParamsType
  servicesDataToReplace: ServicesDataToReplaceType
}

export type ServicePageProps = (props: { params: Promise<ParamsType> }) => Promise<JSX.Element>

export type ServicePageServerProps = ({
  params,
}: {
  params: ParamsType
}) => Promise<ServicePageClientProps>
