'use client'

import { useState } from 'react'

import { Dialog } from '@/components/ui'

import styles from './Home.module.scss'

interface Props {
	className?: string
}

export function Home({ className }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const handler = () => {}
	return (
		<div className={styles.wrap}>
			<button onClick={() => setIsOpen(true)}>Открыть</button>
			<Dialog
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				onConfirm={handler}
				className={styles.modal}
			>
				Привет!
			</Dialog>
		</div>
	)
}
