import cn from 'clsx'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Button } from '@/components/ui/button'

import { useClickOutside } from '@/hooks/useClickOutside'

import { modalAnimate, modalOverlayAnimate } from '@/shared/animation/modal'

import styles from './Dialog.module.scss'

interface Props {
	className?: string
	cancelText?: string
	confirmText?: string
	children: ReactNode
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
}

export function Dialog({
	className,
	cancelText = 'отменить',
	confirmText = 'принять',
	children,
	isOpen,
	onClose,
	onConfirm
}: Props) {
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
						<div className={cn(styles.content, className)}>{children}</div>
						<div className={styles.footer}>
							<Button variant='outline' onClick={onClose}>
								{cancelText}
							</Button>
							<Button variant='primary' onClick={onConfirm}>
								{confirmText}
							</Button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	)
}
