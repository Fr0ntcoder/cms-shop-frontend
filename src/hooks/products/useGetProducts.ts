import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { productService } from '@/services/product.service'

export const useGetProducts = () => {
	const params = useParams<{ storeId: string }>()

	const { data: products, isLoading } = useQuery({
		queryKey: ['products'],
		queryFn: () => productService.getByStoreId(params.storeId)
	})

	return useMemo(() => ({ products, isLoading }), [products, isLoading])
}
