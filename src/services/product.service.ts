import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api-url'

import { IProduct, IProductInput } from '@/shared/types'

class ProductService {
	async getAll(searchTerm?: string | null) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.PRODUCT.ALL,
			method: 'GET',
			params: searchTerm ? { searchTerm } : {}
		})

		return data || null
	}

	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<IProduct[]>({
			url: API_URL.PRODUCT.STORE(storeId),
			method: 'GET'
		})

		return data
	}

	async getById(productId: string) {
		const { data } = await axiosClassic<IProduct>({
			url: API_URL.PRODUCT.ID(productId),
			method: 'GET'
		})

		return data
	}

	async getByCategory(categoryId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.PRODUCT.CATEGORY(categoryId),
			method: 'GET'
		})

		return data
	}

	async getMostPopular() {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.PRODUCT.POPULAR,
			method: 'GET'
		})

		return data
	}

	async getSimilar(productId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.PRODUCT.SIMILAR(productId),
			method: 'GET'
		})

		return data
	}

	async create(data: IProductInput, storeid: string) {
		const { data: createdProduct } = await axiosWithAuth<IProduct[]>({
			url: API_URL.PRODUCT.CREATE(storeid),
			method: 'POST',
			data
		})

		return createdProduct
	}

	async update(data: IProductInput, productId: string) {
		const { data: updateProduct } = await axiosWithAuth<IProduct[]>({
			url: API_URL.PRODUCT.UPDATE(productId),
			method: 'PUT',
			data
		})

		return updateProduct
	}

	async delete(productId: string) {
		const { data: deleteProduct } = await axiosWithAuth<IProduct>({
			url: API_URL.PRODUCT.DELETE(productId),
			method: 'DELETE'
		})

		return deleteProduct
	}
}

export const productService = new ProductService()
