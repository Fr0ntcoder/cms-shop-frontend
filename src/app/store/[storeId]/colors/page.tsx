import { Metadata } from 'next'

import { Colors } from '@/components/features/store/colors'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Цвета магазина',
	...NO_INDEX_PAGE
}
export default function ColorsPage() {
	return <Colors />
}
