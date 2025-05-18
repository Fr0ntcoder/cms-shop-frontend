import { useMutation } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { ROUTES } from '@/config/routes'

import { storeService } from '@/services/store.service'

export const useDeleteStore = () => {
	const router = useRouter()
	const params = useParams<{ storeId: string }>()
	const { mutate: deleteStore, isPending } = useMutation({
		mutationKey: ['delete store'],
		mutationFn: () => storeService.delete(params.storeId),
		onSuccess() {
			toast.success('Магазин удален')
			router.push(ROUTES.HOME)
		},
		onError() {
			toast.error('Ошибка удаления магазина')
		}
	})

	return useMemo(
		() => ({
			deleteStore,
			isPending
		}),
		[deleteStore, isPending]
	)
}
