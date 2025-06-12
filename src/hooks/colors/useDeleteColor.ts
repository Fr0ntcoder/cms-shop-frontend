import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { colorService } from '@/services/color.service'

export const useDeleteColor = () => {
	const params = useParams<{ storeId: string; colorId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: deleteColor, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete color'],
		mutationFn: () => colorService.delete(params.colorId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['colors']
			})
			toast.success('Цвет удален')
			/* router.push(ROUTES.PRODUCT.ID(params.storeId)) */
		},
		onError() {
			toast.error('Ошибка при создании цвета')
		}
	})

	return useMemo(
		() => ({
			deleteColor,
			isLoadingDelete
		}),
		[deleteColor, isLoadingDelete]
	)
}
