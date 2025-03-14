import { Injectable }      from '@nestjs/common'

import { FetchService }    from '@prices/fetcher-adapter-module'
import { FetchClientPort } from '@prices/prices-application-module'

@Injectable()
export class FetchClientPortImpl implements FetchClientPort {
  constructor(private readonly fetchService: FetchService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async get(url: string, headers: Record<string, string>): Promise<any> {
    return this.fetchService.get(url, headers)
  }
}
