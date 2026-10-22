import type { FC }                      from 'react'
import type { PropsWithChildren }       from 'react'

import React                            from 'react'

import { RootLayout as BaseRootLayout } from '@fragments/root-layout-fragment'

import messages                         from '../../locales/ru.json'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <BaseRootLayout messages={messages}>{children}</BaseRootLayout>
)

export { generateMetadata } from '@fragments/root-layout-fragment'

export { revalidate } from '@fragments/root-layout-fragment'

export const dynamic = 'force-dynamic'

export default RootLayout
