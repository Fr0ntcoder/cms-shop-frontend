'use client'

import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { TextError } from '@/components/ui/elements'

import { useClickOutside } from '@/hooks/useClickOutside'

import { selectAnimate } from '@/shared/animation/select'

import styles from './Select.module.scss'

type Option = { label: string; value: string }

interface Props {
	className?: string
	label?: string
	value: string
	onChange: (val: string) => void
	options: Option[]
	placeholder?: string
	error?: string
}

export function Select({
	className,
	value,
	onChange,
	options,
	placeholder = 'Выберите',
	label,
	error
}: Props) {
	const [open, setOpen] = useState(false)
	const selected = options.find(opt => opt.value === value)
	const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))
	const selectList = options.map(item => (
		<div
			className={cn(
				styles.item,
				item.value === value && styles[`item--active`]
			)}
			key={item.value}
			onClick={() => {
				onChange(item.value)
				setOpen(false)
			}}
		>
			{item.label}
		</div>
	))

	return (
		<div className={cn(styles.root, className)} ref={ref}>
			{label && <span className={styles.label}>{label}</span>}
			<div className={styles.text} onClick={() => setOpen(prev => !prev)}>
				{selected ? selected.label : placeholder}
				<ChevronDown
					size={15}
					className={cn(styles.arrow, open && styles[`arrow--active`])}
				/>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div {...selectAnimate} className={styles.list}>
						{selectList}
					</motion.div>
				)}
			</AnimatePresence>
			{error && <TextError text={error} />}
		</div>
	)
}
