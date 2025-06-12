import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { colorService } from '@/services/color.service'

export const useGetColor = () => {
	const params = useParams<{ colorId: string }>()
	const { data, isLoading, error } = useQuery({
		queryKey: ['colors'],
		queryFn: () => colorService.getById(params.colorId)
	})

	return useMemo(() => ({ data, isLoading, error }), [data, isLoading, error])
}
