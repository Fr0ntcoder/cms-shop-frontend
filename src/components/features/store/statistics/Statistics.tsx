import cn from 'clsx'

import { Title } from '@/components/ui'

import { MainStatistics } from './main-statistics'
import { MiddleStatistics } from './middle-statistics'

import styles from './Statistics.module.scss'

interface Props {
	className?: string
}

export function Statistics({ className }: Props) {
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
