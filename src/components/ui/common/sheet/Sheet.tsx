import cn from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode } from 'react'

import { Portal } from '@/components/ui/elements/portal'

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
	return (
		<AnimatePresence>
			{isOpen && (
				<Portal>
					<motion.div
						className={styles.overlay}
						{...sheetOverlayAnimate}
					></motion.div>
					<motion.div
						className={cn(
							styles.content,
							styles[`content--${size}`],
							className
						)}
						{...sheetAnimate}
					>
						{children}
					</motion.div>
				</Portal>
			)}
		</AnimatePresence>
	)
}
