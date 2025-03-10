import type { ReactiveVar } from '@apollo/client'
import type { Service }     from '@store/services'

export interface SignupButtonPartProps {
  radius: string
  onCarBody: string
  serviceName?: string | null
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  serviceVar: ReactiveVar<Service>
  signUp: string
  servicePrice: string
}
