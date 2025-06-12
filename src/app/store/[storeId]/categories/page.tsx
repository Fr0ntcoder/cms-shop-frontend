import { Metadata } from 'next'

import { Category } from '@/components/features/store/categories'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Категории магазина',
	...NO_INDEX_PAGE
}
export default function CategoriesPage() {
	return <Category />
}
