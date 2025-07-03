import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api-url'

import { IStore, TStoreCreateData, TStoreUpdateData } from '@/shared/types'

class StoreService {
	async getById(storeId: string) {
		const { data } = await axiosWithAuth<IStore>({
			url: API_URL.STORE.ID(storeId),
			method: 'GET'
		})

		return data
	}

	async create(data: TStoreCreateData) {
		const { data: createdStore } = await axiosWithAuth<IStore>({
			url: API_URL.STORE.CREATE,
			method: 'POST',
			data
		})

		return createdStore
	}

	async update(storeId: string, data: TStoreUpdateData) {
		const { data: updateStore } = await axiosWithAuth<IStore>({
			url: API_URL.STORE.UPDATE(storeId),
			method: 'PUT',
			data
		})

		return updateStore
	}

	async delete(storeId: string) {
		const { data: deleteStore } = await axiosWithAuth<IStore>({
			url: API_URL.STORE.DELETE(storeId),
			method: 'DELETE'
		})

		return deleteStore
	}
}

export const storeService = new StoreService()
