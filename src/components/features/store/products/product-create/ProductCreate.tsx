'use client'

import { ProductForm } from '@/components/features/store/products/product-form'

import { useGetCategories } from '@/hooks/categories/useGetCategories'
import { useGetColors } from '@/hooks/colors/useGetColors'

export function ProductCreate() {
	const { categories } = useGetCategories()
	const { colors } = useGetColors()

	return <ProductForm categories={categories} colors={colors} />
}
