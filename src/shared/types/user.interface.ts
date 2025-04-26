import { IOrder, IProduct, IStore } from '@/shared/types'

export interface IUser {
	id: string
	name: string
	email: string
	picture: string
	favorites: IProduct[]
	orders: IOrder[]
	stores: IStore[]
}
