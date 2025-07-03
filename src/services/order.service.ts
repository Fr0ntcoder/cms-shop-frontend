import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api-url'

import { IPaymentResponse, OrderTypeData } from '@/shared/types'

class OrderService {
	async place(data: OrderTypeData) {
		return axiosWithAuth<IPaymentResponse>({
			url: API_URL.ORDER.PAYMENT,
			method: 'POST',
			data
		})
	}
}

export const orderService = new OrderService()
