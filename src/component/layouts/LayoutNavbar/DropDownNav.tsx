import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/component/ui/Dropdown'
import { Dispatch, ReactNode, SetStateAction } from 'react'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
  trigger: ReactNode
}

DropDownNav.Item = DropdownMenuItem

export default function DropDownNav({
  isOpen,
  setIsOpen,
  children,
  trigger,
}: Props) {
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen bg-white mt-4 rounded-none border-none shadow-none space-y-8">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
