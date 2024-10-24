import { Entity }                 from '@mikro-orm/core'
import { PrimaryKey }             from '@mikro-orm/core'
import { Property }               from '@mikro-orm/core'

import { APPOINTMENT_TABLE_NAME } from '../constants/index.js'

@Entity({ tableName: APPOINTMENT_TABLE_NAME })
class AppointmentEntity {
  @PrimaryKey()
  id!: number

  @Property()
  telegramUserId!: bigint

  @Property()
  telegramFullName!: string

  @Property()
  timeSlotStart!: bigint

  @Property()
  timeSlotEnd!: bigint

  @Property({ default: false })
  isApproved!: boolean

  @Property()
  carBody!: string

  @Property()
  radii!: string

  @Property()
  service!: string

  @Property({ default: '' })
  commentary?: string
}

export { AppointmentEntity }
