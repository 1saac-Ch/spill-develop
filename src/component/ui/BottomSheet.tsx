import { ReactNode, useRef, useState } from 'react'
import Sheet, { SheetRef } from 'react-modal-sheet'
import NextImage from '../elements/NextImage'

type Props = {
  children: ReactNode
}

const BottomSheet = ({ children }: Props) => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef<SheetRef>()
  const open = () => setOpen(true)
  const close = () => setOpen(false)

  return (
    <>
      <BottomSheet.Trigger open={open} />

      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={close}
        snapPoints={[550]}
        initialSnap={0}
        className="lg:hidden"
      >
        <Sheet.Container className="rounded-t-[24px] min-h-[484px] font-satoshi">
          <Sheet.Header />
          <Sheet.Content>{children}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop className="cursor-default" onTap={close} />
      </Sheet>
    </>
  )
}

BottomSheet.Trigger = function ButtonTrig({ open }: { open: () => void }) {
  return (
    <button
      onClick={open}
      className="flex items-center justify-center lg:hidden rounded-xl border border-border py-3 px-4 flex-none"
    >
      <NextImage
        src="/icons/filter.svg"
        alt="filter"
        width={20}
        height={20}
        className="object-contain"
      />
    </button>
  )
}

export default BottomSheet
