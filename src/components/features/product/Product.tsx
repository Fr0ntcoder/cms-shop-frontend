'use client'

import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'

import { Catalog } from '@/components/ui/elements/catalog'

import { productService } from '@/services/product.service'

import { IProduct } from '@/shared/types'

import { ProductGallery } from './product-gallery'
import { ProductInfo } from './product-info'

import styles from './Product.module.scss'

interface Props {
	product: IProduct
	similarProducts: IProduct[]
	id?: string
	className?: string
}

export function Product({
	className,
	product,
	similarProducts,
	id = ''
}: Props) {
	const { data } = useQuery({
		queryKey: ['product', product.id],
		queryFn: () => productService.getById(id),
		initialData: product,
		enabled: !!id
	})
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.wrapper}>
				<ProductGallery product={data} />
				<ProductInfo />
			</div>
			<Catalog title='Похожие товары' products={similarProducts} />
		</div>
	)
}
