import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { reviewService } from '@/services/review.service'

import { IReview } from '@/shared/types'

export const useGetReviews = () => {
	const params = useParams<{ storeId: string }>()

	const {
		data: reviews = [],
		isLoading,
		error
	} = useQuery({
		queryKey: ['reviews'],
		queryFn: () => reviewService.getByStoreId(params.storeId),
		select: (data: IReview[]) => (Array.isArray(data) ? data : [])
	})

	return useMemo(
		() => ({ reviews, isLoading, error }),
		[reviews, isLoading, error]
	)
}
