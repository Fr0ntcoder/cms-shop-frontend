import cn from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { useClickPortalOutside } from '@/hooks/useClickPortalOutside'

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
	const { ref, handleExitComplete, root } =
		useClickPortalOutside<HTMLDivElement>(onClose, isOpen)

	if (!root) return null

	return createPortal(
		<AnimatePresence onExitComplete={handleExitComplete}>
			{isOpen && (
				<>
					<motion.div
						className={styles.sheet__overlay}
						{...sheetOverlayAnimate}
					></motion.div>
					<motion.div
						ref={ref}
						className={cn(
							styles.sheet__content,
							styles[`sheet__content_${size}`],
							className
						)}
						{...sheetAnimate}
					>
						dfdfdfdfdfdfdfdsfsdfsdfsdfsdfsd
						{children}
					</motion.div>
				</>
			)}
		</AnimatePresence>,
		root
	)
}
