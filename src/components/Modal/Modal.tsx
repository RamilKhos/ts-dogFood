import { createPortal } from 'react-dom'
import React, { useEffect } from 'react'
import modalStyle from './modal.module.scss'

interface Modal {
    isModalOpen: boolean,
    children: React.ReactNode,
}

export const Modal: React.FC <Modal> = ({ isModalOpen, children }) => {
  if (!isModalOpen) return null

  return createPortal(
    <div className={modalStyle.modal}>
        {children}
    </div>,

    document.getElementById('modal-root')!,
  )
}
