import React from 'react'

export interface UseDisclosureProps {
  isOpen: boolean
  defaultIsOpen?: boolean
  onClose?(): void
  onOpen?(): void
  onToggle?(): void
}

const UseDisclosure = (): UseDisclosureProps => {

  const [isOpenState, setInOpenState] = React.useState<boolean>(false);

  const onClose = React.useCallback(() => {
    if (isOpenState) {
      setInOpenState(false)
    }
  }, [isOpenState])

  const onOpen = React.useCallback(() => {
    if (!isOpenState) {
      setInOpenState(true)
    }
  }, [isOpenState])

  const onToggle = React.useCallback(() => {
    setInOpenState(!isOpenState)
  }, [isOpenState])

  return { isOpen: isOpenState, onClose, onOpen, onToggle }
}

export default UseDisclosure