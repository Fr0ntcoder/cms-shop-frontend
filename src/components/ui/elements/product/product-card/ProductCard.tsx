import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Title } from '@/components/ui/common'

import { ROUTES } from '@/config/routes'

import { IProduct } from '@/shared/types'

import { formatPrice } from '@/utils/string/format-price'

import styles from './ProductCard.module.scss'

interface Props {
	product: IProduct
	className?: string
}

export function ProductCard({ className, product }: Props) {
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.image}>
				<Image
					src={product.images[0]}
					fill
					alt={product.title}
					objectFit='cover'
					objectPosition='bottom'
				/>
			</div>
			<Title className={styles.title}>{product.title}</Title>
			<Link
				href={ROUTES.CATEGORY.ID(product.category.id)}
				className={styles.category}
			>
				{product.category.title}
			</Link>
			<div className={styles.price}>{formatPrice(product.price)}</div>
		</div>
	)
}
