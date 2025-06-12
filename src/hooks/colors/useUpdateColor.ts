import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { colorService } from '@/services/color.service'

import { IColor } from '@/shared/types'

export const useUpdateColor = () => {
	const params = useParams<{ colorId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: updateColor, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update product'],
		mutationFn: (data: IColor) => colorService.update(params.colorId, data),
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
