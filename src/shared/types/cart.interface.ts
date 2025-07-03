import { IProduct } from '@/shared/types'

export interface ICartItem {
	id: number
	product: IProduct
	quanity: number
	price: number
}
