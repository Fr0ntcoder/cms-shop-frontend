import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api-url'

import { ICategory, TCategoryFormData } from '@/shared/types'

class CategoryService {
	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<ICategory[]>({
			url: API_URL.CATEGORY.STORE(storeId),
			method: 'GET'
		})

		return data
	}

	async getById(categoryId: string) {
		const { data } = await axiosClassic<ICategory>({
			url: API_URL.CATEGORY.ID(categoryId),
			method: 'GET'
		})

		return data
	}

	async create(storeid: string, data: TCategoryFormData) {
		const { data: createdCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.CATEGORY.CREATE(storeid),
			method: 'POST',
			data
		})

		return createdCategory
	}

	async update(categoryId: string, data: TCategoryFormData) {
		const { data: updateCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.CATEGORY.UPDATE(categoryId),
			method: 'PUT',
			data
		})

		return updateCategory
	}

	async delete(categoryId: string) {
		const { data: deleteCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.CATEGORY.DELETE(categoryId),
			method: 'DELETE'
		})

		return deleteCategory
	}
}

export const categoryService = new CategoryService()
