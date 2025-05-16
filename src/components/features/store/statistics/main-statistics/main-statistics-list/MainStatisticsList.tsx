import cn from 'clsx'

import { IMainStatistics } from '@/shared/types'

import { MainStatisticsItem } from '../main-statistics-item'

import styles from './MainStatisticsList.module.scss'

interface Props {
	data: IMainStatistics[]
	className?: string
}

export function MainStatisticsList({ data, className }: Props) {
	const list = data.map(item => (
		<MainStatisticsItem item={item} key={item.id} />
	))
	return <div className={cn(styles.root, className)}>{list}</div>
}
