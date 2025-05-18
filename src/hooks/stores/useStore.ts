import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { storeService } from '@/services/store.service'

export const useStore = () => {
	const params = useParams<{ storeId: string }>()

	const { data } = useQuery({
		queryKey: ['store'],
		queryFn: () => storeService.getById(params.storeId)
	})

	return useMemo(() => ({ data }), [data])
}
