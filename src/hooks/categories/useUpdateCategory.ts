import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { categoryService } from '@/services/category.service'

import { ICategory } from '@/shared/types'

export const useUpdateCategory = () => {
	const params = useParams<{ categoryId: string }>()
	const queryClient = useQueryClient()

	const { mutate: updateCategory, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update category'],
		mutationFn: (data: ICategory) =>
			categoryService.update(params.categoryId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['categories']
			})
			toast.success('Категория обновлена')
			/* router.push(ROUTES.PRODUCT.ID(params.categoryId)) */
		},
		onError() {
			toast.error('Ошибка при обновлении категории')
		}
	})

	return useMemo(
		() => ({
			updateCategory,
			isLoadingUpdate
		}),
		[updateCategory, isLoadingUpdate]
	)
}
