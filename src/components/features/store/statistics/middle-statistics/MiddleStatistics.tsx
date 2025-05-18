'use client'

import cn from 'clsx'

import { ErrorLoadData } from '@/components/ui'

import { useMiddleStatistics } from '@/hooks/statistics/useMiddleStatistics'

import { MiddleStatisticsOverview } from './middle-statistics-overview'
import { MiddleStatisticsSkeleton } from './middle-statistics-skeleton'
import { MiddleStatisticsUsers } from './middle-statistics-users'

import styles from './MiddleStatistics.module.scss'

interface Props {
	className?: string
}

export function MiddleStatistics({ className }: Props) {
	const { data, isLoading, error } = useMiddleStatistics()

	if (isLoading) {
		return <MiddleStatisticsSkeleton />
	}

	if (!data || error) {
		return <ErrorLoadData />
	}

	return (
		<div className={cn(styles.root, className)}>
			<MiddleStatisticsOverview data={data.monthlySales} />
			<MiddleStatisticsUsers data={data.lastUsers} />
		</div>
	)
}
