import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { ROUTES } from '@/config/routes'

import { colorService } from '@/services/color.service'

import { TColorFormData } from '@/shared/types'

export const useCreateColor = () => {
	const params = useParams<{ storeId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: createColor, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create color'],
		mutationFn: (data: TColorFormData) =>
			colorService.create(params.storeId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['colors']
			})
			toast.success('Цвет создан')
			router.push(ROUTES.PRODUCT.ID(params.storeId))
		},
		onError() {
			toast.error('Ошибка при создании цвета')
		}
	})

	return useMemo(
		() => ({
			createColor,
			isLoadingCreate
		}),
		[createColor, isLoadingCreate]
	)
}
