'use client'

import cn from 'clsx'

import { ErrorLoadData } from '@/components/ui'

import { useQueryStatistics } from '@/hooks/statistics/useQueryStatistics'

import { MiddleStatisticsOverview } from './middle-statistics-overview'
import { MiddleStatisticsSkeleton } from './middle-statistics-skeleton'
import { MiddleStatisticsUsers } from './middle-statistics-users'

import styles from './MiddleStatistics.module.scss'

interface Props {
	className?: string
}

export function MiddleStatistics({ className }: Props) {
	const { middleData, isLoadingMiddleData, isErrorMiddleData } =
		useQueryStatistics()

	if (isLoadingMiddleData) {
		return <MiddleStatisticsSkeleton />
	}

	if (!middleData || isErrorMiddleData) {
		return <ErrorLoadData />
	}

	return (
		<div className={cn(styles.root, className)}>
			<MiddleStatisticsOverview data={middleData.monthlySales} />
			<MiddleStatisticsUsers data={middleData.lastUsers} />
		</div>
	)
}
