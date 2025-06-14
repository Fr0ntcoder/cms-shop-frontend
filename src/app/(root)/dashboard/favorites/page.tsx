import { Metadata } from 'next'

import { Favorites } from '@/components/features/dashboard/favorites'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Избранное',
	...NO_INDEX_PAGE
}

export default function FavoritesPage() {
	return <Favorites />
}
