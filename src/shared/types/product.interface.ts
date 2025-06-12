import { z } from 'zod'

import { ICategory, IColor, IReview } from '@/shared/types'

export interface IProduct {
	id: string
	title: string
	description: string
	price: number
	images: string[]
	category: ICategory
	reviews: IReview[]
	color: IColor
	storeId: string
}

export interface IProductInput
	extends Omit<IProduct, 'id' | 'reviews' | 'store' | 'category' | 'color'> {
	categoryId: string
	colorId: string
}

export const productFormShemas = z.object({
	title: z.string().min(1, { message: 'Это поле обязательно!' }),
	description: z.string().min(1, { message: 'Это поле обязательно!' }),
	images: z.array(z.string()),
	price: z.coerce.number(),
	categoryId: z.string().min(1, { message: 'Это поле обязательно!' }),
	colorId: z.string().min(1, { message: 'Это поле обязательно!' })
})

export type TProductFormData = z.infer<typeof productFormShemas>
