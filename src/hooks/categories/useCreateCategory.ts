import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { ROUTES } from '@/config/routes'

import { categoryService } from '@/services/category.service'

import { TCategoryFormData } from '@/shared/types'

export const useCreateCategory = () => {
	const params = useParams<{ storeId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: createCategory, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create category'],
		mutationFn: (data: TCategoryFormData) =>
			categoryService.create(params.storeId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['categories']
			})
			toast.success('Категория добавлена')
			router.push(`${ROUTES.STORE.CATEGORIES(params.storeId)}`)
		},
		onError() {
			toast.error('Ошибка при создании категории')
		}
	})

	return useMemo(
		() => ({
			createCategory,
			isLoadingCreate
		}),
		[createCategory, isLoadingCreate]
	)
}
