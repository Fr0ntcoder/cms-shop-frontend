import { axiosClassic } from '@/api/api.interceptors'

import { ROUTES } from '@/config/routes'

import {
	removeFromStorage,
	saveTokenStorage
} from '@/services/auth/auth-token.service'

import { IAuthForm, IAuthResponse } from '@/shared/types'

class AuthService {
	async main(type: 'login' | 'register', data: IAuthForm) {
		const response = await axiosClassic<IAuthResponse>({
			url: type === 'login' ? ROUTES.AUTH.LOGIN : ROUTES.AUTH.REGISTER,
			method: 'POST',
			data
		})

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}

		return response
	}

	async getNewTokens() {
		const response = await axiosClassic<IAuthResponse>({
			url: ROUTES.AUTH.TOKEN,
			method: 'POST'
		})

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}

		return response
	}

	async logout() {
		const response = await axiosClassic<boolean>({
			url: ROUTES.AUTH.LOGOUT,
			method: 'POST'
		})

		if (response.data) {
			removeFromStorage()
		}

		return response
	}
}

export const authService = new AuthService()
