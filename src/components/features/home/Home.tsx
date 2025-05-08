'use client'

import { useState } from 'react'

import { Modal } from '@/components/ui'

import styles from './Home.module.scss'

interface Props {
	className?: string
}

export function Home({ className }: Props) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.wrap}>
			<button onClick={() => setIsOpen(true)}>Открыть</button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				Привет!
			</Modal>
		</div>
	)
}
