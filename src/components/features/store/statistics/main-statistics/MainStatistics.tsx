'use client'

import { ErrorLoadData } from '@/components/ui/elements'

import { useMainStatistics } from '@/hooks/statistics/useMainStatistics'

import { MainStatisticsList } from './main-statistics-list'
import { MainStatisticsSkeleton } from './main-statistics-skeleton'

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

	return <MainStatisticsList items={data} />
}
