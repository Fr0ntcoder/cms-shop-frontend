'use client'

import { MainStatisticsList } from '@/components/features/store/statistics/main-statistics/main-statistics-list'
import { MainStatisticsSkeleton } from '@/components/features/store/statistics/main-statistics/main-statistics-skeleton'
import { ErrorLoadData } from '@/components/ui'

import { useQueryStatistics } from '@/hooks/statistics/useQueryStatistics'

interface Props {
	className?: string
}

export function MainStatistics({ className }: Props) {
	const { mainData, isLoadingMainData, isErrorMainData } = useQueryStatistics()

	if (isLoadingMainData) {
		return <MainStatisticsSkeleton />
	}

	if (!mainData || isErrorMainData) {
		return <ErrorLoadData />
	}

	return <MainStatisticsList data={mainData} />
}
