import { axiosWithAuth } from '@/api/api.interceptors'

import { ROUTES } from '@/config/routes'

import { IStore, IStoreCreate } from '@/shared/types'

class StoreService {
	async getById(storeId: string) {
		const { data } = await axiosWithAuth<IStore>({
			url: ROUTES.STORE.ID(storeId),
			method: 'GET'
		})

		return data
	}

	async create(data: IStoreCreate) {
		const { data: createdStore } = await axiosWithAuth<IStore>({
			url: ROUTES.STORE.CREATE,
			method: 'POST',
			data
		})

		return createdStore
	}

	async update(data: IStoreCreate, storeId: string) {
		const { data: updateStore } = await axiosWithAuth<IStore>({
			url: ROUTES.STORE.UPDATE(storeId),
			method: 'PUT',
			data
		})

		return updateStore
	}

	async delete(storeId: string) {
		const { data: deleteStore } = await axiosWithAuth<IStore>({
			url: ROUTES.STORE.DELETE(storeId),
			method: 'DELETE'
		})

		return deleteStore
	}
}

export const storeService = new StoreService()
