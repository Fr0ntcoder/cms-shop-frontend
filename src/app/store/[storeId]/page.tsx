import { Metadata } from 'next'

import { Store } from '@/components/features/store'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metaData: Metadata = {
	title: 'Управление магазином',
	...NO_INDEX_PAGE
}

export default function StorePage() {
	return <Store />
}
