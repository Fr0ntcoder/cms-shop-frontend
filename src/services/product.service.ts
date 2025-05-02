import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { ROUTES } from '@/config/routes'

import { IProduct, IProductInput } from '@/shared/types'

class ProductService {
	async getAll(searchTerm?: string | null) {
		const { data } = await axiosClassic<IProduct[]>({
			url: ROUTES.PRODUCT.ALL,
			method: 'GET',
			params: searchTerm ? { searchTerm } : {}
		})

		return data || null
	}

	async getByStoreId(storeId: string) {
		const { data } = await axiosWithAuth<IProduct[]>({
			url: ROUTES.PRODUCT.STORE(storeId),
			method: 'GET'
		})

		return data
	}

	async getById(productId: string) {
		const { data } = await axiosClassic<IProduct>({
			url: ROUTES.PRODUCT.ID(productId),
			method: 'GET'
		})

		return data
	}

	async getByCategory(categoryId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: ROUTES.PRODUCT.CATEGORY(categoryId),
			method: 'GET'
		})

		return data
	}

	async getMostPopular() {
		const { data } = await axiosClassic<IProduct[]>({
			url: ROUTES.PRODUCT.POPULAR,
			method: 'GET'
		})

		return data
	}

	async getSimilar(productId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: ROUTES.PRODUCT.SIMILAR(productId),
			method: 'GET'
		})

		return data
	}

	async create(data: IProductInput, storeid: string) {
		const { data: createdProduct } = await axiosWithAuth<IProduct[]>({
			url: ROUTES.PRODUCT.CREATE(storeid),
			method: 'POST',
			data
		})

		return createdProduct
	}

	async update(data: IProductInput, productId: string) {
		const { data: updateProduct } = await axiosWithAuth<IProduct[]>({
			url: ROUTES.PRODUCT.UPDATE(productId),
			method: 'PUT',
			data
		})

		return updateProduct
	}

	async delete(productId: string) {
		const { data: deleteProduct } = await axiosWithAuth<IProduct>({
			url: ROUTES.PRODUCT.DELETE(productId),
			method: 'DELETE'
		})

		return deleteProduct
	}
}

export const productService = new ProductService()
