import * as useCases          from '../use-cases/index.js'
import * as services          from '../services/index.js'

import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

@Module({})
export class GraphqlClientApplicationModule {
  static register(): DynamicModule {
    const useCaseProviders = Object.values(useCases)
    const serviceProviders = Object.values(services)

    const providers = [...useCaseProviders, ...serviceProviders]
    const exports = [...useCaseProviders]

    return {
      global: true,
      module: GraphqlClientApplicationModule,
      providers,
      exports,
    }
  }
}