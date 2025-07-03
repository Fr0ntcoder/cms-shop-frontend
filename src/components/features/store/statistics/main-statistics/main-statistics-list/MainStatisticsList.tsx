import cn from 'clsx'

import { IMainStatistics } from '@/shared/types'

import { MainStatisticsItem } from '../main-statistics-item'

import styles from './MainStatisticsList.module.scss'

interface Props {
	items: IMainStatistics[]
	className?: string
}

export function MainStatisticsList({ items, className }: Props) {
	const list = items.map(item => (
		<MainStatisticsItem item={item} key={item.id} />
	))
	return <div className={cn(styles.root, className)}>{list}</div>
}
