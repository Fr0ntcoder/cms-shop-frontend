import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { colorService } from '@/services/color.service'

import { IColor } from '@/shared/types'

export const useGetColors = () => {
	const params = useParams<{ storeId: string }>()

	const {
		data: colors = [],
		isLoading,
		error
	} = useQuery({
		queryKey: ['colors'],
		queryFn: () => colorService.getByStoreId(params.storeId),
		select: (data: IColor[]) => (Array.isArray(data) ? data : [])
	})

	return useMemo(
		() => ({ colors, error, isLoading }),
		[colors, error, isLoading]
	)
}
