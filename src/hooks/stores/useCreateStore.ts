import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { storeService } from '@/services/store.service'

import { TStoreCreateData } from '@/shared/types'

export const useCreateStore = () => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { mutate: createStore, isPending } = useMutation({
		mutationKey: ['create store'],
		mutationFn: (data: TStoreCreateData) => storeService.create(data),
		onSuccess(store) {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			/* router.push(ROUTES.STORE.HOME(store.id)) */
			toast.success('Магазин успешно создан')
		},
		onError() {
			toast.error('Ошибка создания магазина')
		}
	})

	return useMemo(
		() => ({
			createStore,
			isPending
		}),
		[createStore, isPending]
	)
}
