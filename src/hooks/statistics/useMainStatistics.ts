import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { statisticsService } from '@/services/statistics.service'

export const useMainStatistics = () => {
	const params = useParams<{ storeId: string }>()

	const { data, isLoading, error } = useQuery({
		queryKey: ['get main statistics'],
		queryFn: () => statisticsService.getMain(params.storeId)
	})

	return useMemo(() => ({ data, isLoading, error }), [data, isLoading, error])
}
