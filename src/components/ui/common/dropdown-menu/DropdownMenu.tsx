'use client'

import cn from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { ReactNode } from 'react'

import { useClickOutside } from '@/hooks/useClickOutside'
import { useToggle } from '@/hooks/useToggle'

import { popoverAnimate } from '@/shared/animation/popover'

import styles from './DropdownMenu.module.scss'

export type TDropdownMenuItem = {
	label: string
	link: string
	icon?: ReactNode
}

interface Props {
	trigger: ReactNode
	items: TDropdownMenuItem[]
	variants: 'sm' | 'md' | 'lg'
	className?: string
}

export function DropdownMenu({
	className,
	trigger,
	items = [],
	variants
}: Props) {
	const { isOpen, onClose, onToogle } = useToggle()
	const ref = useClickOutside<HTMLDivElement>(() => onClose())
	const list = items.map(item => {
		return (
			<Link href={item.link} key={item.link} className={styles.item}>
				{item.icon}
				{item.label}
			</Link>
		)
	})
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.trigger} ref={ref} onClick={onToogle}>
				{trigger}
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						{...popoverAnimate}
						className={cn(
							styles.list,
							variants === 'sm' && styles['list--sm'],
							variants === 'md' && styles['list--md'],
							variants === 'lg' && styles['list--lg']
						)}
					>
						{list}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
