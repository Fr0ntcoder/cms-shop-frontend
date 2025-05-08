'use client'

import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { useClickOutside } from '@/hooks/useClickOutside'

import { selectAnimate } from '@/shared/animation/select'

import styles from './Select.module.scss'

type SelectOptions = { text: string; value: string }

interface Props {
	className?: string
	options: SelectOptions[]
	onSelect?: (options: SelectOptions) => void
}

export function Select({ options, onSelect, className }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState<SelectOptions | null>(null)
	const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

	const toogleSelect = () => setIsOpen(prev => !prev)

	const handleSelect = (option: SelectOptions) => {
		setSelected(option)
		setIsOpen(false)
		onSelect?.(option)
	}

	const selectList = options.map(item => (
		<div
			className={cn(
				styles.item,
				item.value === selected?.value && styles[`item--active`]
			)}
			key={item.value}
			onClick={() => handleSelect(item)}
		>
			{item.text}
		</div>
	))

	return (
		<div className={cn(styles.root, className)} ref={ref}>
			<div className={styles.text} onClick={toogleSelect}>
				{selected?.text || 'Выберите'}
				<ChevronDown
					size={15}
					className={cn(styles.arrow, isOpen && styles[`arrow--active`])}
				/>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div {...selectAnimate} className={styles.list}>
						{selectList}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
