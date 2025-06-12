import { Metadata } from 'next'

import { ProductEdit } from '@/components/features/store/products/product-edit'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Изменение товара',
	...NO_INDEX_PAGE
}

export default function ProductEditPage() {
	return <ProductEdit />
}
