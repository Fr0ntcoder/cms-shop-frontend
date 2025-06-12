import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { categoryService } from '@/services/category.service'

export const useDeleteCategory = () => {
	const params = useParams<{ storeId: string; categoryId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: deleteCategory, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete category'],
		mutationFn: () => categoryService.delete(params.categoryId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['categories']
			})
			toast.success('Категория удалена')
			/* router.push(ROUTES.PRODUCT.ID(params.storeId)) */
		},
		onError() {
			toast.error('Ошибка при создании категории')
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
