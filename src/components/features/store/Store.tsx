import cn from 'clsx'

import { Title } from '@/components/ui'

import { MainStatistics } from './statistics/main-statistics'
import { MiddleStatistics } from './statistics/middle-statistics'

import styles from './Store.module.scss'

interface Props {
	className?: string
}

export function Store({ className }: Props) {
	return (
		<div className={cn(styles.root, className)}>
			<Title className={styles.title} size='lg'>
				Статистика
			</Title>
			<MainStatistics />
			<MiddleStatistics />
		</div>
	)
}
