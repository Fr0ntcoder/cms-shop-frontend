import { Metadata } from 'next'

import { CategoryEdit } from '@/components/features/store/categories'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Изменение категории',
	...NO_INDEX_PAGE
}
export default function CategoryEditPage() {
	return <CategoryEdit />
}
