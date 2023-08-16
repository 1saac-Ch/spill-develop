import React from 'react'
import ReactModal from 'react-modal'
import styles from './styles.module.scss'

type ModalContentProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose?(): void
}

ReactModal.setAppElement('body')

const Modal = ({ isOpen, onClose, children }: ModalContentProps) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.contentModal}
      overlayClassName={styles.contentOverlay}
      shouldCloseOnOverlayClick={true}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
