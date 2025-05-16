import cn from 'clsx'
import CountUp from 'react-countup'

import { IMainStatistics } from '@/shared/types'

import { getIcon } from '@/utils/getIcon'
import { formatPrice } from '@/utils/string/format-price'

import styles from './MainStatisticsItem.module.scss'

interface Props {
	item: IMainStatistics
	className?: string
}

export function MainStatisticsItem({ item, className }: Props) {
	const Icon = getIcon(item.id)

	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.header}>
				<div className={styles.title}>{item.name}</div>
				<div className={styles.icon}>
					<Icon size={30} />
				</div>
			</div>
			<div className={styles.content}>
				{item.id !== 1 ? (
					<CountUp end={item.value} />
				) : (
					<CountUp end={item.value} formattingFn={formatPrice} />
				)}
			</div>
		</div>
	)
}
