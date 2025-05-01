'use client'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Button } from '@/components/ui/button'

import { useClickPortalOutside } from '@/hooks/useClickPortalOutside'

import { dialogAnimate, dialogOverlayAnimate } from '@/shared/animation/dialog'

import styles from './Dialog.module.scss'

type Props = {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
	children?: ReactNode
	confirmText?: string
	className?: string
}

export const Dialog = ({
	isOpen,
	onClose,
	onConfirm,
	children,
	confirmText,
	className
}: Props) => {
	const { ref, handleExitComplete, root } =
		useClickPortalOutside<HTMLDivElement>(onClose, isOpen)

	if (!root) return null

	return createPortal(
		<AnimatePresence onExitComplete={handleExitComplete}>
			{isOpen && (
				<motion.div className={styles.dialog} {...dialogOverlayAnimate}>
					<motion.div
						className={cn(styles.dialog__wrap, className)}
						{...dialogAnimate}
						ref={ref}
					>
						<button className={styles.dialog__close} onClick={onClose}>
							<X size={20} />
						</button>
						{children && (
							<div className={styles.dialog__content}>{children}</div>
						)}
						<div className={styles.dialog__footer}>
							{confirmText && (
								<Button variant='outline' onClick={onConfirm}>
									{confirmText}
								</Button>
							)}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		root
	)
}
