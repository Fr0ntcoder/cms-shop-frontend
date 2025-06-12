import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { productService } from '@/services/product.service'

import { TProductFormData } from '@/shared/types'

export const useCreateProduct = () => {
	const params = useParams<{ storeId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: createProduct, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create product'],
		mutationFn: (data: TProductFormData) =>
			productService.create(params.storeId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['products']
			})
			toast.success('Товар создан')
			/* router.push(ROUTES.PRODUCT.ID(params.storeId)) */
		},
		onError() {
			toast.error('Ошибка при создании товара')
		}
	})

	return useMemo(
		() => ({
			createProduct,
			isLoadingCreate
		}),
		[createProduct, isLoadingCreate]
	)
}
