'use client'

import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { useClickOutside } from '@/hooks/useClickOutside'

import { modalAnimate, modalOverlayAnimate } from '@/shared/animation/modal'

import styles from './Modal.module.scss'

interface Props {
	className?: string
	children: ReactNode
	isOpen: boolean
	onClose: () => void
}

export function Modal({ className, children, isOpen, onClose }: Props) {
	const ref = useClickOutside<HTMLDivElement>(onClose)

	if (typeof window === 'undefined' || typeof document === 'undefined')
		return null

	return createPortal(
		<AnimatePresence>
			{isOpen && (
				<motion.div className={styles.root} {...modalOverlayAnimate}>
					<motion.div className={styles.wrap} {...modalAnimate} ref={ref}>
						<span className={styles.close} onClick={onClose}>
							<X size={20} />
						</span>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	)
}
