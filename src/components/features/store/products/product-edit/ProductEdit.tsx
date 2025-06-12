'use client'

import { ErrorLoadData, Loader } from '@/components/ui/elements'

import { useGetProduct } from '@/hooks/products/useGetProduct'

import { ProductForm } from '../product-form'

export function ProductEdit() {
	const { data, isLoading, error } = useGetProduct()

	if (isLoading) {
		return <Loader />
	}

	if (!data || error) {
		return <ErrorLoadData />
	}

	return <ProductForm product={data} />
}
