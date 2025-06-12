import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api-url'

import { IColor, IColorInput } from '@/shared/types'

class ColorService {
	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<IColor[]>({
			url: API_URL.COLOR.STORE(storeId),
			method: 'GET'
		})

		return data || []
	}

	async getById(colorId: string) {
		const { data } = await axiosWithAuth<IColor>({
			url: API_URL.COLOR.ID(colorId),
			method: 'GET'
		})

		return data
	}

	async create(storeid: string, data: IColorInput) {
		const { data: createdColor } = await axiosWithAuth<IColor>({
			url: API_URL.COLOR.CREATE(storeid),
			method: 'POST',
			data
		})

		return createdColor
	}

	async update(colorId: string, data: IColorInput) {
		const { data: updateColor } = await axiosWithAuth<IColor>({
			url: API_URL.COLOR.UPDATE(colorId),
			method: 'PUT',
			data
		})

		return updateColor
	}

	async delete(colorId: string) {
		const { data: deleteColor } = await axiosWithAuth<IColor>({
			url: API_URL.COLOR.DELETE(colorId),
			method: 'DELETE'
		})

		return deleteColor
	}
}

export const colorService = new ColorService()
