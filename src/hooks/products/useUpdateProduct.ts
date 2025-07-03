import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { productService } from '@/services/product.service'

import { TProductFormData } from '@/shared/types'

export const useUpdateProduct = () => {
	const params = useParams<{ productId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: updateProduct, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update product'],
		mutationFn: (data: TProductFormData) =>
			productService.update(params.productId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['products']
			})
			toast.success('Товар обновлен')
			/* router.push(ROUTES.PRODUCT.ID(params.productId)) */
		},
		onError() {
			toast.error('Ошибка при обновлении товара')
		}
	})

	return useMemo(
		() => ({
			updateProduct,
			isLoadingUpdate
		}),
		[updateProduct, isLoadingUpdate]
	)
}
