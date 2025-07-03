'use client'

import cn from 'clsx'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Button, Title } from '@/components/ui/common'
import { ErrorLoadData, Loader } from '@/components/ui/elements'
import { DataTable } from '@/components/ui/elements/data-table'

import { ROUTES } from '@/config/routes'

import { useGetProducts } from '@/hooks/products/useGetProducts'

import { TParamsProduct } from '@/shared/types/params.interface'

import { formatPrice } from '@/utils/string/format-price'

import { IProductColumn, productColumns } from './product-column'

import styles from './Products.module.scss'

interface Props {
	className?: string
}

export function Products({ className }: Props) {
	const params = useParams<TParamsProduct>()
	const { products, isLoading, error } = useGetProducts()

	if (isLoading) {
		return <Loader />
	}

	if (error) {
		return <ErrorLoadData />
	}

	const formatedProducts: IProductColumn[] = products.map(product => ({
		id: product.id,
		title: product.title,
		price: formatPrice(product.price),
		category: product.category.title,
		color: product.color.value,
		storeId: product.storeId
	}))

	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.header}>
				<div className={styles.block}>
					<Title className={styles.title} size='lg'>
						Товары ({products?.length})
					</Title>
					<div className={styles.description}>Все товары вашего магазина</div>
				</div>
				<Link href={ROUTES.STORE.PRODUCTS_CREATE(params.storeId)}>
					<Button variant='primary' className={styles.btn}>
						<Plus />
						Создать
					</Button>
				</Link>
			</div>
			<DataTable
				columns={productColumns}
				data={formatedProducts}
				filterKey='title'
			/>
		</div>
	)
}
