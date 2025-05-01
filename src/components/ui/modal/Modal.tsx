import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { useClickPortalOutside } from '@/hooks/useClickPortalOutside'

import { modalAnimate, modalOverlayAnimate } from '@/shared/animation/modal'

import styles from './Modal.module.scss'

interface Props {
	className?: string
	children: ReactNode
	isOpen: boolean
	onClose: () => void
}

export function Modal({ className, children, isOpen, onClose }: Props) {
	const { ref, handleExitComplete, root } =
		useClickPortalOutside<HTMLDivElement>(onClose, isOpen)

	if (!root) return null

	return createPortal(
		<AnimatePresence onExitComplete={handleExitComplete}>
			{isOpen && (
				<motion.div className={styles.modal} {...modalOverlayAnimate}>
					<motion.div
						className={styles.modal__wrap}
						ref={ref}
						{...modalAnimate}
					>
						<button className={styles.modal__close} onClick={onClose}>
							<X size={20} />
						</button>
						{children && (
							<div className={styles.modal__content}>{children}</div>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		root
	)
}
