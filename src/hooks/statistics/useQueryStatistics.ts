import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { statisticsService } from '@/services/statistics.service'

export const useQueryStatistics = () => {
	const params = useParams<{ storeId: string }>()

	const {
		data: mainData,
		isLoading: isLoadingMainData,
		error: isErrorMainData
	} = useQuery({
		queryKey: ['get main statistics'],
		queryFn: () => statisticsService.getMain(params.storeId)
	})

	const {
		data: middleData,
		isLoading: isLoadingMiddleData,
		error: isErrorMiddleData
	} = useQuery({
		queryKey: ['get middle statistics'],
		queryFn: () => statisticsService.getMiddle(params.storeId)
	})

	return useMemo(
		() => ({
			mainData,
			middleData,
			isLoadingMainData,
			isErrorMainData,
			isLoadingMiddleData,
			isErrorMiddleData
		}),
		[
			mainData,
			middleData,
			isLoadingMainData,
			isErrorMainData,
			isLoadingMiddleData,
			isErrorMiddleData
		]
	)
}
