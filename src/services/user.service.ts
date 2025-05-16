import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api-url'

import { IUser } from '@/shared/types'

class UserService {
	async getProfile() {
		const { data } = await axiosWithAuth<IUser>({
			url: API_URL.USER.PROFILE,
			method: 'GET'
		})

		return data
	}

	async toogleFavorite(productId: string) {
		return axiosWithAuth<IUser>({
			url: API_URL.USER.FAVORITES(productId),
			method: 'PATCH'
		})
	}
}

export const userService = new UserService()
