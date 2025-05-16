import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api-url'

import { IMainStatistics, IMiddleStatistics } from '@/shared/types'

class StatisticsService {
	async getMain(storeId: string) {
		const { data } = await axiosWithAuth<IMainStatistics[]>({
			url: API_URL.STATISTIC.MAIN(storeId),
			method: 'GET'
		})

		return data
	}

	async getMiddle(storeId: string) {
		const { data } = await axiosWithAuth<IMiddleStatistics>({
			url: API_URL.STATISTIC.MIDDLE(storeId),
			method: 'GET'
		})

		return data
	}
}

export const statisticsService = new StatisticsService()
