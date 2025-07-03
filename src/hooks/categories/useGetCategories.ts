import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { categoryService } from '@/services/category.service'

import { ICategory } from '@/shared/types'

export const useGetCategories = () => {
	const params = useParams<{ storeId: string }>()

	const {
		data: categories = [],
		isLoading,
		error
	} = useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryService.getByStoreId(params.storeId),
		select: (data: ICategory[]) => (Array.isArray(data) ? data : [])
	})

	return useMemo(
		() => ({ categories, isLoading, error }),
		[categories, isLoading, error]
	)
}
