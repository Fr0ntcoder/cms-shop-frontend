import { Metadata } from 'next'

import { Products } from '@/components/features/store/products'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Товары магазина',
	...NO_INDEX_PAGE
}
export default function ProductsPage() {
	return <Products />
}
