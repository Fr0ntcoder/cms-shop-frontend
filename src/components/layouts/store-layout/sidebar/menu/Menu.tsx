'use client'

import {
	Album,
	BarChart,
	FolderKanban,
	PaintBucket,
	Settings,
	Star
} from 'lucide-react'
import { useParams } from 'next/navigation'

import { ROUTES } from '@/config/routes'

import { MenuItem } from './menu-item'
import { IMenuItem } from './menu.inteface'

import styles from './Menu.module.scss'

interface Props {
	className?: string
}

export function Menu({ className }: Props) {
	const params = useParams<{ storeId: string }>()
	const items: IMenuItem[] = [
		{
			id: 1,
			icon: BarChart,
			link: ROUTES.STORE.ID(params.storeId),
			text: 'Статистика'
		},
		{
			id: 2,
			icon: FolderKanban,
			link: ROUTES.STORE.PRODUCTS(params.storeId),
			text: 'Товары'
		},
		{
			id: 3,
			icon: Album,
			link: ROUTES.STORE.CATEGORIES(params.storeId),
			text: 'Категории'
		},
		{
			id: 4,
			icon: PaintBucket,
			link: ROUTES.STORE.COLORS(params.storeId),
			text: 'Цветы'
		},
		{
			id: 5,
			icon: Star,
			link: ROUTES.STORE.REVIEWS(params.storeId),
			text: 'Отзывы'
		},
		{
			id: 6,
			icon: Settings,
			link: ROUTES.STORE.SETTINGS(params.storeId),
			text: 'Настройки магазина'
		}
	]
	const list = items.map(item => <MenuItem item={item} key={item.id} />)
	return (
		<nav className={styles.menu}>
			<ul className={styles.menu__list}>{list}</ul>
		</nav>
	)
}
