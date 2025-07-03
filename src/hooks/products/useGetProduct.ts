import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { productService } from '@/services/product.service'

export const useGetProduct = () => {
	const params = useParams<{ productId: string }>()
	const { data, isLoading, error } = useQuery({
		queryKey: ['product'],
		queryFn: () => productService.getById(params.productId)
	})

	return useMemo(() => ({ data, isLoading, error }), [data, isLoading, error])
}
