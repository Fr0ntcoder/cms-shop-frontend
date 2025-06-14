import { Metadata } from 'next'

import { Catalog } from '@/components/ui/elements/catalog'

import { ROUTES } from '@/config/routes'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { productService } from '@/services/product.service'

export const metadata: Metadata = {
	title: 'Каталог магазина',
	...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProducts() {
	const data = (await productService.getMostPopular()).slice(0, 6)

	return data
}

export default async function ExplorerPage() {
	const data = await getProducts()
	return (
		<Catalog
			products={data}
			title='Хит продаж'
			description='Самые популярные товары'
			linkTitle='Узнать больше'
			link={ROUTES.EXPLORER()}
		/>
	)
}
