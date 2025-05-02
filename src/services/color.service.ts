import { axiosWithAuth } from '@/api/api.interceptors'

import { ROUTES } from '@/config/routes'

import { IColor, IColorInput } from '@/shared/types'

class ColorService {
	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<IColor[]>({
			url: ROUTES.COLOR.STORE(storeId),
			method: 'GET'
		})

		return data || []
	}

	async getById(colorId: string) {
		const { data } = await axiosWithAuth<IColor>({
			url: ROUTES.COLOR.ID(colorId),
			method: 'GET'
		})

		return data
	}

	async create(data: IColorInput, storeid: string) {
		const { data: createdColor } = await axiosWithAuth<IColor>({
			url: ROUTES.COLOR.CREATE(storeid),
			method: 'POST',
			data
		})

		return createdColor
	}

	async update(data: IColorInput, colorId: string) {
		const { data: updateColor } = await axiosWithAuth<IColor>({
			url: ROUTES.COLOR.UPDATE(colorId),
			method: 'PUT',
			data
		})

		return updateColor
	}

	async delete(colorId: string) {
		const { data: deleteColor } = await axiosWithAuth<IColor>({
			url: ROUTES.COLOR.DELETE(colorId),
			method: 'DELETE'
		})

		return deleteColor
	}
}

export const colorService = new ColorService()
