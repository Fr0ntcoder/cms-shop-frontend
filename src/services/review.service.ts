import { axiosWithAuth } from '@/api/api.interceptors'

import { ROUTES } from '@/config/routes'

import { IReview, IReviewInput } from '@/shared/types'

class ReviewService {
	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<IReview[]>({
			url: ROUTES.REVIEW.STORE(storeId),
			method: 'GET'
		})

		return data
	}

	async create(data: IReviewInput, productId: string, storeid: string) {
		const { data: createdReview } = await axiosWithAuth<IReview>({
			url: ROUTES.REVIEW.CREATE(productId, storeid),
			method: 'POST',
			data
		})

		return createdReview
	}

	async delete(reviewId: string) {
		const { data: deleteReview } = await axiosWithAuth<IReview>({
			url: ROUTES.REVIEW.DELETE(reviewId),
			method: 'DELETE'
		})

		return deleteReview
	}
}

export const reviewService = new ReviewService()
