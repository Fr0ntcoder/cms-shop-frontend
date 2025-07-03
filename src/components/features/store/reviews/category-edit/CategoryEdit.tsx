'use client'

import { ErrorLoadData, Loader } from '@/components/ui/elements'

import { useGetCategory } from '@/hooks/categories/useGetCategory'

import { CategoryForm } from '../category-form'

export function CategoryEdit() {
	const { data, isLoading, error } = useGetCategory()

	if (isLoading) {
		return <Loader />
	}

	if (!data || error) {
		return <ErrorLoadData />
	}

	return <CategoryForm category={data} />
}
