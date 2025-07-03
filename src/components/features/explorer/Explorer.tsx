'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { Catalog } from '@/components/ui/elements/catalog'

import { ROUTES } from '@/config/routes'

import { productService } from '@/services/product.service'

import { IProduct } from '@/shared/types'

interface Props {
	products: IProduct[]
}
export function Explorer({ products }: Props) {
	const searchParams = useSearchParams()
	const searchTerm = searchParams.get('searchTerm')

	const { data = [], isLoading } = useQuery({
		queryKey: ['catalog', searchTerm],
		queryFn: () => productService.getAll(searchTerm),
		select: (data: IProduct[]) => (Array.isArray(data) ? data : [])
	})

	return (
		<Catalog
			isLoading={isLoading}
			products={searchTerm ? data : products}
			title={searchTerm ? `Поиск по запросу ${searchTerm}` : 'Каталог товаров'}
			description='Все доступные товары'
			linkTitle='Узнать больше'
			link={ROUTES.EXPLORER()}
		/>
	)
}
