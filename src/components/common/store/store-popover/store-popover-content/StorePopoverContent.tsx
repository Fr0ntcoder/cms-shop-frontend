'use client'

import { Plus, StoreIcon } from 'lucide-react'

import { IStore } from '@/shared/types'

import styles from './StorePopoverContent.module.scss'

interface Props {
	stores?: IStore[]
	onClick: () => void
	className?: string
}

export function StorePopoverContent({ stores, onClick, className }: Props) {
	return (
		<div className={styles.root}>
			<ul className={styles.list}>
				{stores?.map(item => (
					<li key={item.id} className={styles.item}>
						<StoreIcon />
						<span>{item.title}</span>
					</li>
				))}
			</ul>
			<div className={styles.create} onClick={onClick}>
				<Plus />
				Создать магазин
			</div>
		</div>
	)
}
