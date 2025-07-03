import cn from 'clsx'
import Link from 'next/link'

import { Title } from '@/components/ui/common'
import { Loader } from '@/components/ui/elements/loader'
import { ProductCard } from '@/components/ui/elements/product'

import { IProduct } from '@/shared/types'

import styles from './Catalog.module.scss'

interface Props {
	products: IProduct[]
	isLoading?: boolean
	title: string
	description?: string
	linkTitle?: string
	link?: string
	className?: string
}

export function Catalog({
	className,
	isLoading,
	products,
	title,
	description,
	linkTitle,
	link
}: Props) {
	if (isLoading) {
		return <Loader />
	}

	const list = products.length ? (
		products.map(product => <ProductCard key={product.id} product={product} />)
	) : (
		<div className={styles.empty}>Не найдено</div>
	)

	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.wrapper}>
				<div className={styles.block}>
					<Title size='lg' className={styles.title}>
						{title}
					</Title>
					{description && <p className={styles.description}>{description}</p>}
				</div>
				{link && <Link href={link}>{linkTitle}</Link>}
			</div>
			<div className={styles.list}>{list}</div>
		</div>
	)
}
