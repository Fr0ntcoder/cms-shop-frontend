import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Product } from '@/components/features/product'

import { productService } from '@/services/product.service'

export const revalidate = 60

export async function generateStaticParams() {
	const products = await productService.getAll()

	const paths = products.map(product => {
		return {
			params: { id: product.id }
		}
	})

	return paths
}
async function getProducts(params: { productId: string }) {
	try {
		const product = await productService.getById(params.productId)

		const similarProducts = await productService.getSimilar(params.productId)

		return { product, similarProducts }
	} catch (e) {
		return notFound()
	}
}

export async function generateMetadata({
	params
}: {
	params: { productId: string }
}): Promise<Metadata> {
	const { similarProducts, product } = await getProducts(params)

	return {
		title: product.title,
		description: product.description,
		openGraph: {
			images: [
				{
					url: product.images[0],
					width: 1000,
					height: 1000,
					alt: product.title
				}
			]
		}
	}
}
export default async function ProductPage({
	params
}: {
	params: { productId: string }
}) {
	const { product, similarProducts } = await getProducts(params)
	return (
		<Product
			product={product}
			similarProducts={similarProducts}
			id={params.productId}
		/>
	)
}
