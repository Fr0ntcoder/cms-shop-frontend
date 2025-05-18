'use client'

import { MainStatisticsList } from '@/components/features/store/statistics/main-statistics/main-statistics-list'
import { MainStatisticsSkeleton } from '@/components/features/store/statistics/main-statistics/main-statistics-skeleton'
import { ErrorLoadData } from '@/components/ui'

import { useMainStatistics } from '@/hooks/statistics/useMainStatistics'

interface Props {
	className?: string
}

export function MainStatistics({ className }: Props) {
	const { data, isLoading, error } = useMainStatistics()

	if (isLoading) {
		return <MainStatisticsSkeleton />
	}

	if (!data || error) {
		return <ErrorLoadData />
	}

	return <MainStatisticsList data={data} />
}
