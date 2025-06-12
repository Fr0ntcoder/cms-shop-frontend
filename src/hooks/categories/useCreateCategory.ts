import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { categoryService } from '@/services/category.service'

import { ICategory } from '@/shared/types'

export const useCreateCategory = () => {
	const params = useParams<{ storeId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: createCategory, isPending: isLoadingCategory } = useMutation({
		mutationKey: ['create category'],
		mutationFn: (data: ICategory) =>
			categoryService.create(params.storeId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['categories']
			})
			toast.success('Категория добавлена')
			/* router.push(ROUTES.PRODUCT.ID(params.storeId)) */
		},
		onError() {
			toast.error('Ошибка при создании категории')
		}
	})

	return useMemo(
		() => ({
			createCategory,
			isLoadingCategory
		}),
		[createCategory, isLoadingCategory]
	)
}
