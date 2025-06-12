'use client'

import { useGetCategories } from '@/hooks/categories/useGetCategories'
import { useGetColors } from '@/hooks/colors/useGetColors'
import { useGetProduct } from '@/hooks/products/useGetProduct'

import { ProductForm } from '../product-form'

export function ProductEdit() {
	const { data } = useGetProduct()
	const { categories } = useGetCategories()
	const { colors } = useGetColors()

	return <ProductForm product={data} categories={categories} colors={colors} />
}
