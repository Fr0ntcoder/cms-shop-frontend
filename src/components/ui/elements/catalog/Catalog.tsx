import cn from 'clsx'
import Link from 'next/link'

import { Title } from '@/components/ui/common'
import { ProductCard } from '@/components/ui/elements/product'

import { IProduct } from '@/shared/types'

import styles from './Catalog.module.scss'

interface Props {
	products: IProduct[]
	title: string
	description?: string
	linkTitle: string
	link: string
	className?: string
}

export function Catalog({
	className,
	products,
	title,
	description,
	linkTitle,
	link
}: Props) {
	const list = products.length ? (
		products.map(product => <ProductCard key={product.id} product={product} />)
	) : (
		<div className={styles.empty}>Ничего не найдено</div>
	)
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.wrapper}>
				<div className={styles.block}>
					<Title size='lg' className={styles.title}>
						{title}
					</Title>
					<p className={styles.description}>{description}</p>
				</div>
				<Link href={link}>{linkTitle}</Link>
			</div>
			<div className={styles.list}>{list}</div>
		</div>
	)
}
