import { Plus, StoreIcon } from 'lucide-react'
import Link from 'next/link'

import { Popover } from '@/components/ui'

import { ROUTES } from '@/config/routes'

import { useToggle } from '@/hooks/useToggle'

import { IStore } from '@/shared/types'

import styles from './StorePopover.module.scss'

interface Props {
	stores: IStore[]
	onClick: () => void
	className?: string
}

export function StorePopover({ onClick, stores, className }: Props) {
	const { isOpen, onOpen, onClose, onToogle } = useToggle()

	const list = stores?.map(item => (
		<li key={item.id} className={styles.item}>
			<Link href={ROUTES.STORE.ID(item.id)} className={styles.link}>
				<StoreIcon />
				<span>{item.title}</span>
			</Link>
		</li>
	))

	return (
		<Popover
			trigger={
				<>
					<StoreIcon />
					Текущий магазин
				</>
			}
			isOpen={isOpen}
			onToogle={onToogle}
			onClose={onClose}
		>
			<div className={styles.root}>
				<ul className={styles.list}>{list}</ul>
				<div className={styles.create} onClick={onClick}>
					<Plus />
					Создать магазин
				</div>
			</div>
		</Popover>
	)
}
