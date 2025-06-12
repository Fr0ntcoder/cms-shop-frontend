import { Metadata } from 'next'

import { ProductCreate } from '@/components/features/store/products'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Создание товара',
	...NO_INDEX_PAGE
}

export default function ProductCreatePage() {
	return <ProductCreate />
}
