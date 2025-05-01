'use client'

import cn from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode, Ref, useEffect, useRef, useState } from 'react'

import { popoverAnimate } from '@/shared/animation/popover'

import styles from './Popover.module.scss'

type Position = 'top' | 'bottom' | 'left' | 'right'
interface Props {
	buttonLabel: string
	children: ReactNode
	position?: Position
}

export function Popover({ buttonLabel, children, position = 'top' }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const buttonRef = useRef<HTMLButtonElement | null>(null)
	const contentRef = useRef<HTMLButtonElement | null>(null)

	const togglePopover = () => setIsOpen(prev => !prev)

	const handleClickOutside = (e: MouseEvent) => {
		if (
			contentRef.current &&
			!contentRef.current.contains(e.target as Node) &&
			buttonRef.current &&
			!buttonRef.current.contains(e.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])

	return (
		<div className={styles.popover}>
			<button
				ref={buttonRef}
				onClick={togglePopover}
				className={styles.popover__trigger}
			>
				{buttonLabel}
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						{...popoverAnimate}
						ref={contentRef as Ref<HTMLDivElement>}
						className={cn(
							styles.popover__content,
							position === 'left' && styles.popover__content_left,
							position === 'right' && styles.popover__content_right,
							position === 'top' && styles.popover__content_top,
							position === 'bottom' && styles.popover__content_bottom
						)}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
