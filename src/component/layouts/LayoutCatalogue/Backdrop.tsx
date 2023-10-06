import React from 'react'
import useLockBodyScroll from '@/hooks/useLockBody'

const Backdrop = ({ onClick }: { onClick: () => void }) => {
  useLockBodyScroll()
  return <div onClick={onClick} className="fixed inset-0 z-[10] bg-black/40" />
}

export default Backdrop
