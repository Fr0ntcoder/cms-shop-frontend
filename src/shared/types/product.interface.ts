import { ICategory, IColor, IReview, IStore } from '@/shared/types'

export interface IProduct {
	id: string
	title: string
	description: string
	price: number
	images: string[]
	category: ICategory
	reviews: IReview[]
	color: IColor
	store: IStore
}

export interface IProductInput
	extends Omit<IProduct, 'id' | 'reviews' | 'store' | 'category' | 'color'> {
	categoryId: string
	colorId: string
}
