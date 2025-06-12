import cn from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode } from 'react'

import { Button } from '@/components/ui/common/button'

import { useClickOutside } from '@/hooks/useClickOutside'

import { popoverAnimate } from '@/shared/animation/popover'

import styles from './Popover.module.scss'

interface Props {
	isOpen: boolean
	onToogle: () => void
	onClose: () => void
	trigger: ReactNode
	children: ReactNode
	className?: string
}

export function Popover({
	isOpen,
	onToogle,
	onClose,
	trigger,
	children,
	className
}: Props) {
	const ref = useClickOutside<HTMLDivElement>(() => onClose())
	return (
		<div className={cn(styles.root, className)} ref={ref}>
			<Button variant='outline' className={styles.trigger} onClick={onToogle}>
				{trigger}
			</Button>
			<AnimatePresence>
				{isOpen && (
					<motion.div {...popoverAnimate} className={cn(styles.content)}>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
