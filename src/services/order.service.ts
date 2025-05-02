import { axiosWithAuth } from '@/api/api.interceptors'

import { ROUTES } from '@/config/routes'

import { IPaymentResponse, OrderTypeData } from '@/shared/types'

class OrderService {
	async place(data: OrderTypeData) {
		return axiosWithAuth<IPaymentResponse>({
			url: ROUTES.ORDER.PAYMENT,
			method: 'POST',
			data
		})
	}
}

export const orderService = new OrderService()
