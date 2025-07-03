import { Metadata } from 'next'

import { CategoryCreate } from '@/components/features/store/categories'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Категория магазина',
	...NO_INDEX_PAGE
}
export default function CategoryCreatePage() {
	return <CategoryCreate />
}
