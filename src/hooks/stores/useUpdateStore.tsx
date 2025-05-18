import { useMutation, useQueryClient } from '@tanstack/react-query'
import { create } from 'domain'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { storeService } from '@/services/store.service'

import { TStoreUpdateData } from '@/shared/types'

export const useUpdateStore = () => {
	const params = useParams<{ storeId: string }>()
	const router = useRouter()
	const queryClient = useQueryClient()
	const { mutate: updateStore, isPending } = useMutation({
		mutationKey: ['update store'],
		mutationFn: (data: TStoreUpdateData) =>
			storeService.update(params.storeId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			/* router.push(ROUTES.HOME) */
			toast.success('Магазин обновлен')
		},
		onError() {
			toast.error('Ошибка обновления магазина')
		}
	})

	return useMemo(
		() => ({
			updateStore,
			isPending
		}),
		[create, isPending]
	)
}
