import { Metadata } from 'next'

import { Statistics } from '@/components/features/store/statistics'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Статистика магазина',
	...NO_INDEX_PAGE
}

export default function StatatisticsPage() {
	return <Statistics />
}
