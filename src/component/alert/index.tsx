import Image from 'next/image'
import { Dialog, DialogContent } from '../ui/Dialog'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { DialogClose } from '@radix-ui/react-dialog'
import Link from 'next/link'

type PropsUnion =
  | {
      open: boolean
      setOpen: Dispatch<SetStateAction<boolean>>
    }
  | {
      defaultOpen: boolean
      closeElement: ReactNode
    }

type Props = {
  children: ReactNode
} & PropsUnion

export default function Alert({ children, ...props }: Props) {
  return (
    <Dialog {...props}>
      <DialogContent className="bg-white flex flex-col max-w-[600px] w-[80vw] p-6 md:p-8 rounded-[20px] items-center md:gap-6 font-satoshi">
        <Image
          src={'/check.png'}
          alt="check"
          width={128}
          height={128}
          className="object-contain"
        />
        {children}

        {'defaultOpen' in props ? (
          <DialogClose className="w-full">{props.closeElement}</DialogClose>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
