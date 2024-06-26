import { InputHTMLAttributes } from 'react'

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  items: string[]
  value?: string[]
  onChange?: (item: string) => void
  onSelect?: any
  placeholder?: string
  selectedDefault?: string
  setIsOpen?: (isOpen: boolean) => any
}
