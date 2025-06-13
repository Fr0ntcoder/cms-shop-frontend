import cn from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { useClickOutside } from '@/hooks/useClickOutside'

import { sheetAnimate, sheetOverlayAnimate } from '@/shared/animation/sheet'

import styles from './Sheet.module.scss'

interface Props {
	isOpen: boolean
	size?: 'sm' | 'md' | 'lg'
	onClose: () => void
	children?: ReactNode
	className?: string
}

export function Sheet({
	isOpen,
	onClose,
	children,
	size = 'sm',
	className
}: Props) {
	const ref = useClickOutside<HTMLDivElement>(onClose)

	if (typeof window === 'undefined' || typeof document === 'undefined')
		return null
	return createPortal(
		<AnimatePresence>
			{isOpen && (
				<motion.div className={styles.root}>
					<motion.div
						className={styles.overlay}
						{...sheetOverlayAnimate}
					></motion.div>
					<motion.div
						ref={ref}
						className={cn(
							styles.content,
							styles[`content--${size}`],
							className
						)}
						{...sheetAnimate}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	)
}
