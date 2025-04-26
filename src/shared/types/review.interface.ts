import { IUser } from '@/shared/types'

export interface IReview {
	id: string
	text: string
	rating: number
	user: IUser
	createdAt: string
}

export interface IReviewInput extends Pick<IReview, 'rating' | 'text'> {}
