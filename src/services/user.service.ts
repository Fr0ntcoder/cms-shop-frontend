import { axiosWithAuth } from '@/api/api.interceptors'

import { ROUTES } from '@/config/routes'

import { IUser } from '@/shared/types'

class UserService {
	async getProfile() {
		const response = await axiosWithAuth<IUser>({
			url: ROUTES.USER.PROFILE,
			method: 'GET'
		})

		return response
	}

	async toogleFavorite(productId: string) {
		return axiosWithAuth<IUser>({
			url: ROUTES.USER.FAVORITES(productId),
			method: 'PATCH'
		})
	}
}

export const userService = new UserService()
