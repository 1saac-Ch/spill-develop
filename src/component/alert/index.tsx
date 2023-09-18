import Image from 'next/image'
import { Dialog, DialogContent } from '../ui/Dialog'
import { Dispatch, ReactNode, SetStateAction } from 'react'

type Props = {
  children: ReactNode
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Alert({ children, open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white flex flex-col max-w-[600px] w-[80vw] p-6 md:p-8 rounded-[20px] items-center md:gap-6">
        <Image
          src={'/check.png'}
          alt="check"
          width={128}
          height={128}
          className="object-contain"
        />
        {children}
      </DialogContent>
    </Dialog>
  )
}
