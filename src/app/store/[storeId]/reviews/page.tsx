import { Metadata } from 'next'

import { Reviews } from '@/components/features/store/reviews'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Отзывы магазина',
	...NO_INDEX_PAGE
}
export default function ReviewsPage() {
	return <Reviews />
}
