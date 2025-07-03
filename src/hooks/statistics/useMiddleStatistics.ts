import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { statisticsService } from '@/services/statistics.service'

export const useMiddleStatistics = () => {
	const params = useParams<{ storeId: string }>()

	const { data, isLoading, error } = useQuery({
		queryKey: ['get middle statistics'],
		queryFn: () => statisticsService.getMiddle(params.storeId)
	})

	return useMemo(() => ({ data, isLoading, error }), [data, isLoading, error])
}
