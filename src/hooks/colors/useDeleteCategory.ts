import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { colorService } from '@/services/color.service'

export const useDeleteProduct = () => {
	const params = useParams<{ storeId: string; colorId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: deleteCategory, isPending: isLoadingDelete } = useMutation({
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
			deleteCategory,
			isLoadingDelete
		}),
		[deleteCategory, isLoadingDelete]
	)
}
