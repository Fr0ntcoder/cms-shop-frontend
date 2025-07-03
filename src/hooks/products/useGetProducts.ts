import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { productService } from '@/services/product.service'

import { IProduct } from '@/shared/types'

export const useGetProducts = () => {
	const params = useParams<{ storeId: string }>()

	const {
		data: products = [],
		isLoading,
		error
	} = useQuery({
		queryKey: ['products'],
		queryFn: () => productService.getByStoreId(params.storeId),
		select: (data: IProduct[]) => (Array.isArray(data) ? data : [])
	})

	return useMemo(
		() => ({ products, error, isLoading }),
		[products, error, isLoading]
	)
}
