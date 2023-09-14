import React from 'react'
import useLockBodyScroll from '@/hooks/useLockBody'

const Backdrop = () => {
  useLockBodyScroll()
  return <div className="fixed inset-0 z-[39] bg-black/40" />
}

export default Backdrop
