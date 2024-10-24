import type { FragmentsDataType } from '@globals/data'
import type { ContactsDataType }  from '@globals/data'

export interface ContactAddons {
  address: string
  email: string
  linkFb: string
  linkVk: string
  fragmentId: string
  telephone: string
  title: string
  workingHours: string
}

// TODO remove
// export interface Fragment {
//   contentAddons: {
//     title: string
//     content: string
//     fragmentId: string
//     highlightedtext: string
//   }
// }

export interface FooterProps {
  navigationItemsType?: string
  contactsData: ContactsDataType
  // fragmentsData: Fragment[]
  fragmentsData: FragmentsDataType
}
