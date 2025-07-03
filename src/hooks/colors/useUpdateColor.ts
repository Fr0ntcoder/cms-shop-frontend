import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { colorService } from '@/services/color.service'

import { TColorFormData } from '@/shared/types'

export const useUpdateColor = () => {
	const params = useParams<{ colorId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: updateColor, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update product'],
		mutationFn: (data: TColorFormData) =>
			colorService.update(params.colorId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['colors']
			})
			toast.success('Цвет обновлен')
			/* router.push(ROUTES.PRODUCT.ID(params.colorId)) */
		},
		onError() {
			toast.error('Ошибка при обновлении цвета')
		}
	})

	return useMemo(
		() => ({
			updateColor,
			isLoadingUpdate
		}),
		[updateColor, isLoadingUpdate]
	)
}
