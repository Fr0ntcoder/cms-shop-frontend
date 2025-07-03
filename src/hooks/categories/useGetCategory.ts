import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { categoryService } from '@/services/category.service'

export const useGetCategory = () => {
	const params = useParams<{ categoryId: string }>()
	const { data, isLoading, error } = useQuery({
		queryKey: ['category'],
		queryFn: () => categoryService.getById(params.categoryId)
	})

	return useMemo(() => ({ data, isLoading, error }), [data, isLoading, error])
}
