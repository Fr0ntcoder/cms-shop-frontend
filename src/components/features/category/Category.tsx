import { Catalog } from '@/components/ui/elements/catalog'

import { ICategory, IProduct } from '@/shared/types'

interface Props {
	category: ICategory
	products: IProduct[]
	className?: string
}

export function Category({ className, category, products }: Props) {
	return (
		<Catalog
			products={products}
			title={category.title}
			description={category.description}
			linkTitle=''
			link=''
		/>
	)
}
