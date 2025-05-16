import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api-url'

import { IReview, IReviewInput } from '@/shared/types'

class ReviewService {
	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<IReview[]>({
			url: API_URL.REVIEW.STORE(storeId),
			method: 'GET'
		})

		return data
	}

	async create(data: IReviewInput, productId: string, storeid: string) {
		const { data: createdReview } = await axiosWithAuth<IReview>({
			url: API_URL.REVIEW.CREATE(productId, storeid),
			method: 'POST',
			data
		})

		return createdReview
	}

	async delete(reviewId: string) {
		const { data: deleteReview } = await axiosWithAuth<IReview>({
			url: API_URL.REVIEW.DELETE(reviewId),
			method: 'DELETE'
		})

		return deleteReview
	}
}

export const reviewService = new ReviewService()
