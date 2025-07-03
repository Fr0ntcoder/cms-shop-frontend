import { Metadata } from 'next'

import { Explorer } from '@/components/features/explorer'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { productService } from '@/services/product.service'

export const metadata: Metadata = {
	title: 'Каталог магазина',
	...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProducts() {
	const data = await productService.getAll()

	return data
}

export default async function ExplorerPage() {
	const data = await getProducts()
	return <Explorer products={data} />
}
